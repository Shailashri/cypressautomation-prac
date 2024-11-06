describe('Registration page', function(){
    it('Registring user', ()=>{
        cy.visit('https://www.demoblaze.com/');
        cy.get('[id="signin2"]').click();
        cy.get('[id="sign-username"]').type('Mitisha');
        cy.get('[id="sign-password"]').type('xyz456');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
       
        })
})