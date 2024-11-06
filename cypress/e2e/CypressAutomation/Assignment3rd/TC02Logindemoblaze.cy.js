describe('Login Demoblaze', function(){
    it('Demo login', ()=>{
        cy.visit('https://www.demoblaze.com/');
        cy.get('[id="login2"]').click();
        cy.wait(2000);
        cy.get('[id="loginusername"]').type('Mitisha');
        cy.get('[id="loginpassword"]').type('xyz456');
        //cy.get('[onclick="logIn()"]').click();
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    })
})