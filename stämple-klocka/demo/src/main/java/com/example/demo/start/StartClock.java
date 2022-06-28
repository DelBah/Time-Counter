package com.example.demo.start;

import org.springframework.data.annotation.Id;

import java.time.LocalTime;

public class StartClock {

    @Id
    private String id;

    public LocalTime startTime;
    public LocalTime endTime;
    private String timeSpent;

    public StartClock() {

    }

    public StartClock(LocalTime startTime, LocalTime endTime,String timeSpend){
        this.startTime = startTime;
        this.endTime = endTime;
        this.timeSpent = timeSpend;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public String getTimeSpent() {
        return timeSpent;
    }

    public void setTimeSpent(String timeSpent) {
        this.timeSpent = timeSpent;
    }

    @Override
    public String toString() {
        return "StartClock{" +
                "id='" + id + '\'' +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                '}';
    }
}
