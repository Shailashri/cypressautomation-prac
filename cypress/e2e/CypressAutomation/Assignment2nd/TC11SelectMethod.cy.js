// To select an option in a select, use the .select() command.

describe('Select Method', function(){
    it('Select method Test Case', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        // at first, no option should be selected
        cy.get('.action-select').should('have.value', '--Select a fruit--');
        // Select option(s) with matching text content
        cy.get('.action-select').select('apples');
        // confirm the apples were selected
        // note that each value starts with "fr-" in our HTML
        cy.get('.action-select').should('have.value', 'fr-apples');
        cy.get('.action-select-multiple').select(['apples', 'oranges', 'bananas']);
        // when getting multiple values, invoke "val" method first
        cy.get('.action-select-multiple').invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']);
        // Select option(s) with matching value
        cy.get('.action-select').select('fr-bananas');
        // can attach an assertion right away to the element
        cy.get('.action-select').should('have.value', 'fr-bananas');
        cy.get('.action-select-multiple').select(['fr-apples', 'fr-oranges', 'fr-bananas']);
        cy.get('.action-select-multiple').invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']);
        
// assert the selected values include oranges
cy.get('.action-select-multiple').invoke('val').should('include', 'fr-oranges');

    })
})