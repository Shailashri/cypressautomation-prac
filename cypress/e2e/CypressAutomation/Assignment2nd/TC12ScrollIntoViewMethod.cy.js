// To scroll an element into view, use the .scrollintoview() command.

describe('Scroll into view method', function(){
    it('Scroll Test case', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
// normally all of these buttons are hidden,
// because they're not within
// the viewable area of their parent
// (we need to scroll to see them)
    
     cy.get('#scroll-horizontal button').should('not.be.visible');
     // scroll the button into view, as if the user had scrolled
     cy.get('#scroll-horizontal button').scrollIntoView();
     cy.get('#scroll-horizontal button').should('be.visible');
     cy.get('#scroll-vertical button').should('not.be.visible');
     // Cypress handles the scroll direction needed
     cy.get('#scroll-vertical').scrollIntoView();
     cy.get('#scroll-vertical').should('be.visible');
     cy.get('#scroll-both button').should('not.be.visible');
    // Cypress knows to scroll to the right and down
    cy.get('#scroll-both button').scrollIntoView();
    cy.get('#scroll-both button').should('be.visible');

    })
})