describe('Login with the same user', ()=>{
    it('Login demo',()=>{
        cy.visit('https://tutorialsninja.com/demo/');
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        cy.get('#input-email').type('magadumshaila@gmail.com');
        cy.get('#input-password').type('xyzabc');
        cy.get('form > .btn').click();

    })
})