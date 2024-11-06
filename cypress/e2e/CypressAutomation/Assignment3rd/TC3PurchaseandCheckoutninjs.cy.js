describe('Purchase and Checkout', function(){
    it('Checkout Ninja', ()=>{
        cy.visit('https://tutorialsninja.com/demo/');
       cy.get('.nav > :nth-child(2) > .dropdown-toggle').click();
       cy.get('.open > .dropdown-menu > .see-all').click();
       cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click();
          cy.get('#input-quantity').clear();
          cy.get('#input-quantity').type('3');
        cy.get('#button-cart').click();
       cy.get('.btn-inverse').click();
       cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout"] > strong').click();
       cy.get(':nth-child(3) > label > input').click();
       cy.get('#button-account').click();
       cy.get('#input-payment-firstname').type('Shailashri');
       cy.get('#input-payment-lastname').type('Padache');
       cy.get('#input-payment-email').type('abzx15y8@gmail.com');
       cy.get('#input-payment-telephone').type('0720017834');
       cy.get('#input-payment-password').type('Mitish2020');
       cy.get('#input-payment-confirm').type('Mitish2020');
       cy.get('#input-payment-address-1').type('Nygatan');
       cy.get('#input-payment-city').type('Sodertalje');
       cy.get('#input-payment-postcode').type('591327');
       cy.get('#input-payment-country').select('Sweden');
       cy.get('#input-payment-zone').select('Stockholm');
       cy.get('.pull-right > [type="checkbox"]').click();
       //cy.wait(2000);
       cy.get('#button-register').click();
       cy.get('#button-shipping-address').click();
       cy.wait(1000);
       cy.get(':nth-child(5) > .form-control').type('Nice')
       cy.get('#button-shipping-method').click();
       //cy.get('#button-shipping-method').click();
       cy.get('[type="checkbox"]').click();
       cy.get('#button-payment-method').click();
       cy.get('#button-confirm').click();
       
       
    })
})