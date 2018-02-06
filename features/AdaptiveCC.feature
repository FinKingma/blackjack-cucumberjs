Feature: Adaptive Cruise Control
  As a Driver
  I want my car to adjust its speed to the car in front of me
  So that I can keep reading my book

Scenario: adjusting speed to car in front
  Given Jim is driving at 90mph
  And John is driving at 100mph 
  When John's car approaches Jims'
  Then John's car adjusts its speed to Jim's car