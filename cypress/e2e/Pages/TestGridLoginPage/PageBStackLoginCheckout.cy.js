class LoginPage {
    enterURL() {
      cy.visit("https://bstackdemo.com/");
    }
    clickSignInLink() {
      cy.get('#signin').click();
      return this;
    }
     selectEmailPassword(username, password) {
        cy.get('[id="username"]').click();
        cy.get('#react-select-2-option-0-0').click();
        cy.get('[id="password"]').click();
        cy.get('#react-select-3-option-0-0').click();

        return this;
     }
    clickLoginButton() {
        cy.get('#login-btn').click();
    return this;
    }
    verifyPageTitle() {
     return cy.title().should("eq", "StackDemo");
     }
    verifyUserLoggedIn() {
      return cy.contains('Apple')
    }
    addProductToCart() {
    cy.get('#\\31  > .shelf-item__buy-btn').click();
    cy.get('#\\32  > .shelf-item__buy-btn').click({ force: true });;
    //cy.get('#\\33  > .shelf-item__buy-btn').click();
    cy.get('#\\33  > .shelf-item__buy-btn').click({ force: true });
    cy.get('#\\34  > .shelf-item__buy-btn').click({ force: true });
        return this;
    }
    verifyCountCartBag(){
       cy.get('[class="bag"]').click();
        cy.get('.float-cart__shelf-container .shelf-item').its('length')
         .then((itemCount) => {
            //cy.log('Number of items in the cart: `${itemCount}`');
            cy.log('itemcount in the cart', itemCount);
            expect(itemCount).to.be.greaterThan(0);  // Assert that there is at least one item
           //expect(itemCount).to.be.equal('4');
        });
  
         return this;rem
    }
    verifyCheckoutButton () {
        cy.get('.buy-btn').click();
    }
    verifyShippingAddress (FirstName, LastName, Address, Provience, PostalCode) {
    cy.get('#firstNameInput').type(FirstName);
    cy.get('#lastNameInput').type(LastName);
    cy.get('#addressLine1Input').type(Address);
    cy.get('#provinceInput').type(Provience);
    cy.get('#postCodeInput').type(PostalCode);
    }
    clickSubmitButton() {
    cy.get('#checkout-shipping-continue').click();
    return this;
    }
    // verifyCodelessLink() {
    //   return cy.get("#tgtestcase").click();
    // }
    // verifyCodelessLinkOpen() {
    //   return cy.contains("Lets get you started with codeless automation");
    // }
    // clickLogoutLink() {
    //     cy.get("[data-toggle='dropdown']").click(); cy.contains("Logout").click();
    //     return
    // }
     }
    const login = new LoginPage();
    export default login;

    //