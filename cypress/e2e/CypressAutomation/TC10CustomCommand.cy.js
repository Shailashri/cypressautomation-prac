//let expectname = 'Nguyen Tai';
describe('Custom Command demo', function(){
    it('Custom Demo test', ()=>{
      
        cy.loginApplication(Cypress.env('username'), Cypress.env('password'));

        cy.get('.oxd-userdropdown-name').then((name)=>{
            let namedemo = name.text();
            cy.log(namedemo);
            //expect(expectname).to.be.eq(namedemo);
            cy.url().should('contains','dashboard');
            //cy.get('ul.oxd-main-menu');       
            cy.verifyMenuItem('Performance', 'add');
           cy.get('[class="oxd-main-menu-item"]').should('have.length', '11');
           
        })
    })
})