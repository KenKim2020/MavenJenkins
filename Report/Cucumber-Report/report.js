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
  "duration": 5261726000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "duration": 2133923600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 1300436000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 350173000,
  "status": "passed"
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
  "duration": 1466315700,
  "status": "passed"
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
  "duration": 210116700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 1553627200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "duration": 4016912400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "duration": 268024800,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "duration": 623786800,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "duration": 932187400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "duration": 220597800,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "duration": 276451500,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "duration": 181845600,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "duration": 2329482600,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "duration": 40389700,
  "status": "passed"
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
  "duration": 3459999500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "duration": 2148319000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 1601222000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 372442200,
  "status": "passed"
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
  "duration": 2070127100,
  "status": "passed"
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
  "duration": 177884600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 153431300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "duration": 3314277200,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "duration": 864426200,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "duration": 654049300,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "duration": 753247600,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "duration": 307987400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "duration": 212288700,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "duration": 249850900,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "duration": 2769450600,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "duration": 280563200,
  "status": "passed"
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
  "duration": 4553368100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "duration": 2209324100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 2636564800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 711363100,
  "status": "passed"
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
  "duration": 2564398600,
  "status": "passed"
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
  "duration": 212515300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 921376700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "duration": 2375270400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "duration": 698668300,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "duration": 648695300,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "duration": 775249100,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "duration": 196358100,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "duration": 160546800,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "duration": 185710700,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "duration": 1739444600,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "duration": 24243900,
  "status": "passed"
});
});