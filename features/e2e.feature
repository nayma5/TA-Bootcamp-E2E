Feature: Bootcamp E2E

  Background: As a user, I can access homepage

    Given I am on the homepage
    When I close the promo banner if it appears


  Scenario: As a user, I am able to search items via search bar

   When I enter the word "Windows" in the search bar
   When I click the search button
   Then I should see at least one item appears


  Scenario: As I user, I can return to Today's Best Deal page

    When I open 'Today's Best Deals' tab
    When I click the logo of Internet shop
    Then I should be redirected back to the homepage