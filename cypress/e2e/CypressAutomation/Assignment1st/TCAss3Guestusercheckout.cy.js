describe('Guest checkout', ()=>{
    it('Guest demo', ()=>{
        cy.visit('https://tutorialsninja.com/demo/');
        cy.get('.nav > :nth-child(2) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > .see-all').click();
        
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click();
        cy.get('#button-cart').click();
        cy.get('#cart-total').click();
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout"] > strong').click();
        cy.get(':nth-child(1) > :nth-child(4) > label').click();
        cy.get('#button-account').click(); // continue with guest user guest checkout
        cy.get('#input-payment-firstname').type('Shaila');
        cy.get('#input-payment-lastname').type('Magadum');
        cy.get('#input-payment-email').type('shailashri@stockholmitacademy.org');
        cy.get('#input-payment-telephone').type('09998793126');
        cy.get('#input-payment-company').type('SITA');
        cy.get('#input-payment-address-1').type('Stockholm');
        cy.get('#input-payment-city').type('Sodertalje');
        cy.get('#input-payment-postcode').type('591317');
        //cy.get('#input-payment-country').click();  //Check
        cy.get('#input-payment-country').select('Sweden');
        cy.get('#input-payment-zone').select('Stockholm');
        //cy.get('.checkbox > label > input').click(); //checkbox is already checked uncheck and check
        cy.get('#button-guest').click();
        cy.get('.panel-body > :nth-child(5) > .form-control').type('Satisfied');
        cy.get('#button-shipping-method').click();
        cy.get('.pull-right > [type="checkbox"]').click();
        cy.get('#button-payment-method').click();
        cy.get('#button-confirm').click();
        cy.wait(2000);
        // cy.get('.pull-right > .btn').click(); //check
        cy.get('.pull-right > .btn').click();
    })
})