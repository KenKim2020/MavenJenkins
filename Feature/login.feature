Feature: Test login functionality
  As a valid user, I should be able to login in the application.

Background: 
    Given I Open Chrome Browser
    When I maxmize the webbrowser
    When I go to the Salesforce application
    Then I should see the Salesforce logo

  @Sprint2
  Scenario Outline: Test using Valid Credentials
    When I enter "<username>" username
    When I enter "<password>" password
    When I click the login button
    Then I should see the logout link
    When I click the Accounts Tab
    Then I am on Accounts Home Page
    When I click the New button
    When I enter in Account Name
    And I enter the Account Number
    And I enter the Account Site
    When I click save
    Then I should see the Account Record

    Examples: 
      | username                | password |
      | batch03@codegator.us.qa | Pa55word |
      | batch03@codegator.us.qa | Pa55word |
      | batch03@codegator.us.qa | Pa55word |
