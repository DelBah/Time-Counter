package com.example.demo.start;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalTime;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class StartClockController {
    @Autowired
    StartClockRepository clockRepository;


    @PostMapping("/create")
    public String createStartTime(StartClock startClock) {
        startClock.setStartTime(LocalTime.now());
        clockRepository.save(startClock);
        return startClock.getId();
    }

    @PutMapping("/setStopTime")
    public StartClock setStopTime() {
        //Get all
        List<StartClock> listOfTimes = getAll();
        //Get last
        StartClock lastObj = listOfTimes.get(listOfTimes.size() - 1);
        //Set attr to time.now
        lastObj.setEndTime(LocalTime.now());
        //Save to DB
        clockRepository.save(lastObj);
        //Calculation
        LocalTime startTime = lastObj.getStartTime();
        LocalTime endTime = lastObj.getEndTime();
        Duration duration = Duration.between(startTime, endTime);
        //Message with hours and minutes spent
        String message = "Time spent:" + duration.toHoursPart() + " Hour(s) " + duration.toMinutesPart() + " Minute(s)";
        //Set attr
        lastObj.setTimeSpent(message);
        //Save to DB
        clockRepository.save(lastObj);
        return lastObj;
    }


    @GetMapping("/all")
    public List<StartClock> getAll() {
        return clockRepository.findAll();
    }
}
