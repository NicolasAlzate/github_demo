Feature: End to End ecommerce validation

    application regression 

    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce website
    When I add Items to cart
    And Validate the total price
    Then Select the country submit and verify Thank U message

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce website
    When I fill the form details
        |name | gender|
        |bobz | Male  |
    Then I validate the forms behaviour
    And Select the shop page