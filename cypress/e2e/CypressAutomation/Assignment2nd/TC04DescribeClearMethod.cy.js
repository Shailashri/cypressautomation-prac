// To clear on a DOM element, use the .clear() command.

describe('Describe Clear Method', function(){
    it('Describe demo test', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('[id="description"]').type('clear this text');
        cy.get('[id="description"]').should('have.value', 'clear this text');
        cy.get('#description').clear();
        cy.get('#description').should('have.value', '');
    })
})


