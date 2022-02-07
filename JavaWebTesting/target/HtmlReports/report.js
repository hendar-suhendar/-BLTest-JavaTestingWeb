$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/GoogleSearch.feature");
formatter.feature({
  "name": "feature to test google search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters a text in search box",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Features/LoginDemo.feature");
formatter.feature({
  "name": "Test login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open url to login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "users click on login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is navigated to the home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.register.user_is_navigated_to_the_home_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/Register.feature");
formatter.feature({
  "name": "Test register functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.scenario({
  "name": "Check register is successful with valid phone number credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "name": "open url to bukalapak website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.register.open_url_to_bukalapak_website()"
});
formatter.result({
  "error_message": "java.lang.NoSuchMethodError: org.openqa.selenium.chrome.ChromeDriverService.\u003cinit\u003e(Ljava/io/File;ILcom/google/common/collect/ImmutableList;Lcom/google/common/collect/ImmutableMap;)V\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver$FakeDriverService.\u003cinit\u003e(ChromeDriver.java:989)\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:916)\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:880)\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:726)\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:74)\r\n\tat StepDefinitions.register.open_url_to_bukalapak_website(register.java:34)\r\n\tat ✽.open url to bukalapak website(file:///D:/Documents/QA%20Jobs/Test%20BL/JavaWebTestingBukalapak/JavaWebTesting/src/test/resources/Features/Register.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.register.user_click_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters phone number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.register.user_enters_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "users click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.register.users_click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user confirmation on SMS OTP code",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.register.user_confirmation_on_SMS_OTP_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.register.user_is_navigated_to_the_home_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/dsa.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "some other precondition",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I complete action",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "some other action",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "yet another action",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "name": "I verify the \u003cstatus\u003e in step",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ]
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ]
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with name1",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I check for the 5 in step",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify the success in step",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with name2",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I check for the 7 in step",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify the Fail in step",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "feature to login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeFeature"
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeFeature"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "cliks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is navigated to the home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.register.user_is_navigated_to_the_home_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/register/Register.feature");
formatter.feature({
  "name": "Test register functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check register is successful with valid phone number credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "open url to bukalapak website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.register.open_url_to_bukalapak_website()"
});
formatter.result({
  "error_message": "java.lang.NoSuchMethodError: org.openqa.selenium.chrome.ChromeDriverService.\u003cinit\u003e(Ljava/io/File;ILcom/google/common/collect/ImmutableList;Lcom/google/common/collect/ImmutableMap;)V\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver$FakeDriverService.\u003cinit\u003e(ChromeDriver.java:989)\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:916)\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:880)\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:726)\r\n\tat io.testproject.sdk.drivers.web.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:74)\r\n\tat StepDefinitions.register.open_url_to_bukalapak_website(register.java:34)\r\n\tat ✽.open url to bukalapak website(file:///D:/Documents/QA%20Jobs/Test%20BL/JavaWebTestingBukalapak/JavaWebTesting/src/test/resources/Features/register/Register.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.register.user_click_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters phone number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.register.user_enters_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "users click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.register.users_click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user confirmation on SMS OTP code",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.register.user_confirmation_on_SMS_OTP_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.register.user_is_navigated_to_the_home_screen()"
});
formatter.result({
  "status": "skipped"
});
});