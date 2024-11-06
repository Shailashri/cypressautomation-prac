// To uncheck a checkbox or radio, use the .uncheck() command.

describe('Uncheck method Radio and Checkbox', function(){
    it('Uncheck Demo Test Case', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
// By default, .uncheck() will uncheck all matching
// checkbox elements in succession, one after another
       cy.get('.action-check [type="checkbox"]').not('[disabled]').uncheck();
       cy.get('.action-check [type="checkbox"]').not('[disabled]').should('not.be.checked');
// .uncheck() accepts a value argument
      cy.get('.action-check [type="checkbox"]').check('checkbox1');
      cy.get('.action-check [type="checkbox"]').uncheck('checkbox1');
      cy.get('.action-check [type="checkbox"][value="checkbox1"]').should('not.be.checked');
      // .uncheck() accepts an array of values
      cy.get('.action-check [type="checkbox"]').check(['checkbox1', 'checkbox3']);
      cy.get('.action-check [type="checkbox"]').uncheck(['checkbox1', 'checkbox3']);
      cy.get('.action-check [type="checkbox"][value="checkbox1"]').should('not.be.checked');
      cy.get('.action-check [type="checkbox"][value="checkbox3"]').should('not.be.checked');
      // Ignore error checking prior to unchecking
      cy.get('.action-check [disabled]').uncheck({ force: true});
      cy.get('.action-check [disabled]').should('not.be.checked');
    })
})