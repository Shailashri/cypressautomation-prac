describe('Registration page for ninja',()=>{
    it('Registration demo', ()=>{
        cy.visit('https://tutorialsninja.com/demo/');
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.get('#content > h1').should('be.visible');
        cy.get('h1 > a').should('be.visible');
        cy.get('#input-firstname').type('Shailashri');
        cy.get('#input-lastname').type('Padache');
        cy.get('#input-email').type('magadumshaila@gmail.com');
        cy.get('#input-telephone').type('0720019169');
        cy.get('#input-password').type('xyzabc');
        cy.get('#input-confirm').type('xyzabc');
        cy.get('.col-sm-10 > :nth-child(2) > input').click();
        cy.get('[type="checkbox"]').click();
        cy.get('.pull-right > .btn').click();
        

    })
})