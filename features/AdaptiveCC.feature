Feature: Adaptive Cruise Control
  As a driver
  I want my car to adjust its speed to the car in front of me
  So that I can use my cruise control in traffic

Scenario: 
  Given John drives at 60 mph
  And William drives at 70 mph
  When William nears John
  Then John's car will adjust its speed to 60 mph