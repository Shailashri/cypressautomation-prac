// To check a checkbox or radio, use the .check() command.

describe('Check Radio and Checkbox', function(){
    it('Check method Test Case', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        // By default, .check() will check all
       // matching checkbox or radio elements in succession, one after another
         cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check();
         cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked');
         cy.get('.action-radios [type="radio"]').not('[disabled]').check();
         //cy.wait(2000);
         cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked');
         // .check() accepts a value argument
         cy.get('.action-radios [type="radio"]').check('radio1')
         cy.get('.action-radios [type="radio"]').should('be.checked');
         // .check() accepts an array of values
         cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2']);
         cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked');
         // Ignore error checking prior to checking
         cy.get('.action-checkboxes [disabled]').check({ force: true});
         cy.get('.action-checkboxes [disabled]').should('be.checked');
         cy.get('.action-radios [type="radio"]').check('radio2', { force: true});
         cy.get('.action-radios [type="radio"]').should('be.checked');
    })
})