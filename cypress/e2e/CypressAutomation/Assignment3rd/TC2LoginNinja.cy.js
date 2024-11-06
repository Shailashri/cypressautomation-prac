describe('Login to Ninja',function(){
    it('Ninja demo test', ()=>{
        cy.visit('https://tutorialsninja.com/demo/');
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        cy.get('#input-email').type('abzxyz@gmail.com');
        cy.get('#input-password').type('Mitish2020');
        cy.get('form > .btn').click();
    })
})