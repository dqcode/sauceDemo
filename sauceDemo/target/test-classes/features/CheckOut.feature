@CheckOut
Feature: CheckOut
  As a user i want to login to website sauce demo

  Scenario: Normal login
    Given User open the website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    And User sort product list by name z to a
    And User pick item Test.allTheThings T-Shirt Red
    And User pick item Sauce Labs Onesie
    And User click chart button
    Then User should on cart page
    And User click remove button on Test.allTheThings T-Shirt Red
    And User click check out on cart page
    When User input "diqy" as firstName and input "anfield" as lastName and input "007" as zipCode
    And System showing summary of payment
    And User click finish button
    Then System showing messages "THANK YOU FOR YOUR ORDER"


