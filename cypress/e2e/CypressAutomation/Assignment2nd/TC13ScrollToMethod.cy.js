// To scroll the window or a scrollable element to a specific position, use the cy.scrollTo() command.

describe('ScrollTo method', function(){
    it('Scroll Test Case', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        // You can scroll to 9 specific positions of an element:
        // if you chain .scrollTo() off of cy, we will
        // scroll the entire window 
        cy.scrollTo('bottom');
        cy.get('#scrollable-horizontal').scrollTo('right');
        // or you can scroll to a specific coordinate:
        // (x axis, y axis) in pixels
        cy.get('#scrollable-vertical').scrollTo(250, 250);
        // or you can scroll to a specific percentage
        // of the (width, height) of the element
        cy.get('#scrollable-both').scrollTo('75%', '25%');
        // control the easing of the scroll (default is 'swing')
        cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' });
        // control the duration of the scroll (in ms)
        cy.get('#scrollable-both').scrollTo('center', { duration: 2000 });

    })
})