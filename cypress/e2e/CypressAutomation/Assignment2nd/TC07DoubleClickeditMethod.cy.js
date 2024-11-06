// To double click a DOM element, use the .dblclick() command.

describe('Double click Method', function(){
    it('Doucle click demo Test case',()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        // Our app has a listener on 'dblclick' event in our 'scripts.js'
        // that hides the div and shows an input on double click   
        cy.get('[class="action-div"]').dblclick();
        cy.get('.action-div').should('not.be.visible');
        cy.get('.action-input-hidden').should('be.visible');
        cy.get('.action-input-hidden').type('Shaila typed two times');

    })
})