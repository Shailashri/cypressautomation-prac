// To click a DOM element, use the .click() command.

describe('Click to toggle opoover', function(){
    it('Click Method demo Test', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('[class="btn btn-lg btn-danger action-btn"]').click();
        // You can click on 9 specific positions of an element:
        // clicking in the center of the element is the default
        cy.get('[id="action-canvas"]').click();
        cy.get('[id="action-canvas"]').click('topLeft');
        cy.get('[id="action-canvas"]').click('top');
        cy.get('[id="action-canvas"]').click('topRight');
        cy.get('[id="action-canvas"]').click('left');
        cy.get('[id="action-canvas"]').click('right');
        cy.get('[id="action-canvas"]').click('bottomLeft');
        cy.get('[id="action-canvas"]').click('bottom');
        cy.get('[id="action-canvas"]').click('bottomRight');
// .click() accepts an x and y coordinate
// that controls where the click occurs :)
       cy.get('[id="action-canvas"]').click(80,75); // click 80px on x coord and 75px on y coord
       cy.get('[id="action-canvas"]').click(170,75);
       cy.get('[id="action-canvas"]').click(80,165);
       cy.get('[id="action-canvas"]').click(100,185);
       cy.get('[id="action-canvas"]').click(125,190);
       cy.get('[id="action-canvas"]').click(150,185);
       cy.get('[id="action-canvas"]').click(170,165);
       // click multiple elements by passing multiple: true
        cy.get('[class="action-labels"]').click({ multiple: true});
        // Ignore error checking prior to clicking
        cy.get('[class="opacity-cover"]').click({ force: true});
    })
})