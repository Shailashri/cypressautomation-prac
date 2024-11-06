/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/TestGridLoginPage/PageBStackLoginCheckout.cy.js";
Given("I navigate to the Website", () => {
login.enterURL();
});
When("I click on Sign In Link", () => {
login.clickSignInLink();
});
When("I entered valid credential", (datatable) => {
 datatable.hashes().forEach((element) => {
 login.selectEmailPassword(element.email, element.validpassword);
 });
 });
When("Click on log in button", () => {
login.clickLoginButton();
});
Then("Validate user is logged in", () => {
login.verifyUserLoggedIn();
});
Then("Validate the title after login", () => {
login.verifyPageTitle();
});
Then("I add Product To Cart", ()=>{
login.addProductToCart()
});
When ("I click on Cart Bag to count the product", ()=>{
    login.verifyCountCartBag();
})
When ("I click on Checkout Button", ()=>{
    login.verifyCheckoutButton();
})
When ("I click on Shipping address", ()=>{
    login.verifyShippingAddress();
})
When("I entered Shipping Address details", (datatable) => {
    datatable.hashes().forEach((element) => { 
        //FullName   | LastName | Address       | State     | PostalCode |

    login.verifyShippingAddress(element.FullName, element.LastName, element.Address, element.State, element.PostalCode);
    });
    });
   When("I click on Submit button", () => {
   login.clickSubmitButton();
   });

