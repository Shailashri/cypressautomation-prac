// To right click a DOM element, use the .rightclick() command.

describe('Right click Method', function(){
    it('Right Click Test Case', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
// Our app has a listener on 'contextmenu' event in our 'scripts.js'
// that hides the div and shows an input on right click
        cy.get('.rightclick-action-div').rightclick();
        cy.get('.rightclick-action-div').should('not.be.visible');
        cy.get('.rightclick-action-input-hidden').should('be.visible');
    })
})