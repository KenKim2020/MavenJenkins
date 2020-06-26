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
  "duration": 4333929100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "duration": 10838700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 2665223800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 95633100,
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
  "duration": 149915900,
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
  "duration": 269377900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 4057024000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "duration": 104200800,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "duration": 776656700,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "duration": 38068100,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "duration": 977053500,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "duration": 96193000,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "duration": 77108600,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "duration": 118796900,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "duration": 1690639000,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "duration": 9746500,
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
  "duration": 2218588900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "duration": 6462700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 2588445100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 56016600,
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
  "duration": 141758800,
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
  "duration": 157137400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 670422900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "duration": 1075248300,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "duration": 1034839200,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "duration": 56914700,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "duration": 824440800,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "duration": 113246000,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "duration": 110800200,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "duration": 108915000,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "duration": 388220300,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "duration": 5946300,
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
  "duration": 2241443300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maxmize_the_webbrowser()"
});
formatter.result({
  "duration": 7796800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 2975048500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 112252300,
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
  "duration": 127722100,
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
  "duration": 219262200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 2820688300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logot_link()"
});
formatter.result({
  "duration": 50411500,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_Tab()"
});
formatter.result({
  "duration": 614165700,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_Accounts_Home_Page()"
});
formatter.result({
  "duration": 47566700,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_Button()"
});
formatter.result({
  "duration": 619498400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_in_Account_Name()"
});
formatter.result({
  "duration": 78690300,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Number()"
});
formatter.result({
  "duration": 63309600,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_enter_the_Account_Site()"
});
formatter.result({
  "duration": 66608400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_save()"
});
formatter.result({
  "duration": 366532400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_Account_Record()"
});
formatter.result({
  "duration": 6788200,
  "status": "passed"
});
});