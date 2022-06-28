package com.example.demo.start;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StartClockRepository extends MongoRepository<StartClock, String> {

}
