describe('Registration Ninja', function(){
    it('Ninja demo', ()=>{
        cy.visit('https://tutorialsninja.com/demo/');
        cy.get('[title="My Account"]').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.get('#input-firstname').type('Shaila');
        cy.get('#input-lastname').type('padache');
        cy.get('#input-email').type('abzxyz@gmail.com');
        cy.get('#input-telephone').type('0720016169');
        cy.get('#input-password').type('Mitish2020');
        cy.get('#input-confirm').type('Mitish2020');
        cy.get('[type="checkbox"]').click();
        cy.get('.pull-right > .btn').click();


    })
})