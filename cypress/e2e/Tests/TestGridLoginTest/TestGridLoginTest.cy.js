/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/TestGridLoginPage/TestGridLoginPage.cy";
Given("I navigate to the Website", () => {
login.enterURL();
cy.clearAllSessionStorage();
cy.clearAllLocalStorage();
cy.clearAllCookies();
});
When("I click on Sign In Link", () => {
login.clickSignInLink();
});
When("I entered valid credential", (datatable) => {
datatable.hashes().forEach((element) => {
  login.enterEmailPassword(element.email, element.validpassword);
});
});
When("Click on sign in button", () => {
  cy.wait(20000);

login.clickSignButton();
//cy.intercept('POST','url of captcha')
cy.get('#btn-confim-overwrite').click();
});
Then("Validate user is logged in", () => {
login.verifyUserLoggedIn();
});
Then("Validate the title after login", () => {
login.verifyPageTitle();
});
When("I click on Codeless link", () => {
login.verifyCodelessLink();
});
Then("Validate Codeless link should be open", () => {
login.verifyCodelessLinkOpen();
});
When("I click logout link", () => {
login.clickLogoutLink();
});