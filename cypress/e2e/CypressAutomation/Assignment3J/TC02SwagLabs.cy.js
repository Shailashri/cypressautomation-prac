describe("spree commerce Demo", ()=>{
    it("TC01 - Sign up for spree commerce Test Demo", ()=>{
    cy.visit('https://demo.spreecommerce.org/');
    cy.get('[class="flex items-end"]').click();
    cy.get('[href="/user/sign_up"]').click();
    cy.get('[id="user_email"]').type('magadumshaila@gmail.com');
    cy.get('[id="user_password"]').type('Mitisha@2020');
    cy.get('[id="user_password_confirmation"]').type('Mitisha@2020');
    cy.get('[value="Sign Up"]').click();
    })  
    })