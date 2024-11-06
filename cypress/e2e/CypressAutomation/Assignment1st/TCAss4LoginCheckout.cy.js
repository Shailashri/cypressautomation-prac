describe('Login Checkout with registered user', function(){
    it('Login checkout demo', ()=>{
        cy.visit('https://tutorialsninja.com/demo/');
        cy.clearAllCookies();
        //cy.get('.caret').click(); below are same
        cy.get('.dropdown > .dropdown-toggle > .fa').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        cy.get('#input-email').type('magadumshaila@gmail.com');
        cy.get('#input-password').type('xyzabc');
        cy.get('form > .btn').click();
        cy.get('.nav > :nth-child(2) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > .see-all').click();
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click();
        cy.get('#input-quantity').clear().type('2'); 

        //items are getting increased after running the TC,   I want it to be constant
         cy.get('#button-cart').click();
         cy.get('.btn-inverse').click();
        cy.get(':nth-child(5) > a > .fa').click();
        cy.get('#button-payment-address').click();
        cy.get('#button-shipping-address').click();
        cy.get(':nth-child(5) > .form-control').type('Conformed');
        cy.get('#button-shipping-method').click();
        cy.get('[type="checkbox"]').click();
        cy.get('#button-payment-method').click();
        cy.get('#button-confirm').click();
    })
})