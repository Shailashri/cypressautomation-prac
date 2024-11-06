// To submit a form, use the cy.submit() command.

describe('Coupon code Submit method', function(){
    it('Coupon code demo test case', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
     
          //cy.get('#couponCode1').find('[type="text"]').type('HALFOFF')
          // Check Throwing error
          cy.get('.action-form').find('[type="text"]').type('HALFOFF');
          //cy.get('[class="btn btn-primary"]').click() what is the difference bet these two commands
          cy.get('.action-form').submit();
          cy.get('.action-form').next().should('contain', 'Your form has been submitted!');
          cy.get('.action-form > .btn').click();
    })
})