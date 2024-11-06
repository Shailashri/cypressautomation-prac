Feature: Login into the site with valid data
  Background: Navigate to the Website
      Given I navigate to the Website
 Scenario: Login into the application with valid data
     When I click on Sign In Link
     And I entered valid credential
        | email       | validpassword |
        | demouser    | testingisfun99   |
    And Click on log in button
    Then Validate user is logged in
    Then Validate the title after login
    And I add Product To Cart
    Then I click on Cart Bag to count the product
    Then I click on Checkout Button
    #And I click on Shipping address
    And I entered Shipping Address details
    |   FullName   | LastName | Address       | State     | PostalCode |

    |  Shailashri  |  Padache | Sodertalje    | Stockholm  | 15173       | 
     Then I click on Submit button
    #   When I click on Codeless link
    #   Then Validate Codeless link should be open
    #   When I click logout link