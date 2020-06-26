$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "As a valid user, I should be able to login in the application.",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a valid user I should be able to login into the application",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-into-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to the application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the logo",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 164346500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 83100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_logo()"
});
formatter.result({
  "duration": 2240900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_a_valid_username()"
});
formatter.result({
  "duration": 82500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_a_valid_password()"
});
formatter.result({
  "duration": 67200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_logo()"
});
formatter.result({
  "duration": 76600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As a valid user I should be able to login into the application",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-into-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I go to the application",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "# Then I should see the logo"
    }
  ],
  "line": 16,
  "name": "I enter a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 78300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 62100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_a_valid_username()"
});
formatter.result({
  "duration": 52800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_a_valid_password()"
});
formatter.result({
  "duration": 247800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_logo()"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
});