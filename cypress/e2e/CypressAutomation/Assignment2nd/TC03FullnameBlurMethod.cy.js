// To blur on a DOM element, use the .blur() command.

describe('Blur Method Fullname', function(){
    it('Fullname demo test', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('[id="fullName1"]').type('Not about to blur');
        cy.get('[id="fullName1"]').blur();
        cy.get('[id="fullName1"]').should('have.class', 'error').prev().should('have.attr', 'style', 'color: red;');
        

    })
})