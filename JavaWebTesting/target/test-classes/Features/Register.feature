@TS_Register
Feature: Test register functionality

  @TC_Positif_01
  Scenario Outline: Check register is successful with valid phone number credentials
    Given open url to bukalapak website
    And user click register button
    When user enter phone_number
    And user click on register button
    And user confirmation on SMS OTP code
    Then user is navigated to the home screen

    Examples:
      | phone_number |
      | 085800000000 |

  @TC_Positif_02
  Scenario Outline: Check register is successful with valid email credentials
    Given open url to bukalapak website
    And user click register button
    When user enter <email>
    And users click on register button
    And user confirmation on email OTP code
    Then user is navigated to the home screen

    Examples: 
      | email                    |
      | apptesting@outlook.co.id |

  @TC_Positif_03
  Scenario Outline: Check register is successful with valid gmail credentials
    Given open url to bukalapak website
    And user click register button
    And user click gmail button
    When user enter google <email> and click next button
    And user enter <password> email and click next button
    Then user is navigated to the home screen

    Examples: 
      | email             		| password 	 |
      | qa.software@gmail.com	| d0l3@RNING |
  
   @TC_Positif_04
  Scenario Outline: Check register is successful with valid facebook credentials
    Given open url to bukalapak website
    And user click register button
    And user click facebook button
    When user enter facebook <email>
    And user enter facebook <password>
    And users click on login button
    Then user is navigated to the home screen

    Examples: 
      | email             		| password 	 |
      | qa.software@gmail.com	| d0l3@RNING |
