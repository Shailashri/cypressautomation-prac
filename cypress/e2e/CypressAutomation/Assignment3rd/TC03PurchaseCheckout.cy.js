describe('Purchase and Checkout', function(){
    it('Checkout of demoblaze', ()=>{
        cy.visit('https://www.demoblaze.com/');
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#name').type('shaila');
        cy.get('#country').type('Sweden');
        cy.get('#city').type('Stockholm');
        cy.get('#card').type('1236781234');
        cy.get('#month').type('12');
        cy.get('[id="year"]').type('2020');
        cy.get('[onclick="purchaseOrder()"]').click();
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.confirm').click();
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.confirm').click();
        //cy.get('[id="logout2"]').click();
    })
})