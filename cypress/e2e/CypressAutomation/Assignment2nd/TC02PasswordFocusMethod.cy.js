describe('Password focus method', function(){
    it('Focus demo test', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        //cy.scrollTo('bottom');
        //  To focus on a DOM element, use the .focus() command.
        cy.get('#password1').focus();
        cy.get('#password1').should('have.class', 'focus').prev().should('have.attr', 'style', 'color: orange;')

    })
})