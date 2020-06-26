$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "As a valid user, I should be able to login in the application.",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Test using Valid Credentials",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cusername\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cpassword\u003e\" password",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click the Accounts Tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I am on Accounts Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click the New button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter in Account Name",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter the Account Number",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter the Account Site",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click save",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see the Account Record",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "test-login-functionality;test-using-valid-credentials;;1"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 27,
      "id": "test-login-functionality;test-using-valid-credentials;;2"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 28,
      "id": "test-login-functionality;test-using-valid-credentials;;3"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 29,
      "id": "test-login-functionality;test-using-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I maxmize the webbrowser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 266997100,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\My PC\\eclipse-workspace\\com.codegator.cucumber\\Drivers\\phantomjs\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.findPhantomJS(PhantomJSDriverService.java:245)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.createDefaultService(PhantomJSDriverService.java:181)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:105)\r\n\tat stepDefinition.LoginTest.I_Open_Chrome_Browser(LoginTest.java:28)\r\n\tat ✽.Given I Open Chrome Browser(Feature/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Test using Valid Credentials",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click the Accounts Tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I am on Accounts Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click the New button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter in Account Name",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter the Account Number",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter the Account Site",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click save",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see the Account Record",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "AccountTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "AccountTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I maxmize the webbrowser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 461600,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\My PC\\eclipse-workspace\\com.codegator.cucumber\\Drivers\\phantomjs\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.findPhantomJS(PhantomJSDriverService.java:245)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.createDefaultService(PhantomJSDriverService.java:181)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:105)\r\n\tat stepDefinition.LoginTest.I_Open_Chrome_Browser(LoginTest.java:28)\r\n\tat ✽.Given I Open Chrome Browser(Feature/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Test using Valid Credentials",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click the Accounts Tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I am on Accounts Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click the New button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter in Account Name",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter the Account Number",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter the Account Site",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click save",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see the Account Record",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "AccountTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "AccountTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I maxmize the webbrowser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 511100,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\My PC\\eclipse-workspace\\com.codegator.cucumber\\Drivers\\phantomjs\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.findPhantomJS(PhantomJSDriverService.java:245)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.createDefaultService(PhantomJSDriverService.java:181)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:105)\r\n\tat stepDefinition.LoginTest.I_Open_Chrome_Browser(LoginTest.java:28)\r\n\tat ✽.Given I Open Chrome Browser(Feature/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Test using Valid Credentials",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click the Accounts Tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I am on Accounts Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click the New button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter in Account Name",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter the Account Number",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter the Account Site",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click save",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see the Account Record",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "AccountTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "AccountTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "status": "skipped"
});
});