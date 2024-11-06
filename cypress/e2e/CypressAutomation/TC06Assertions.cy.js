describe('Assertions Demo', function(){
    it('Assertions Demo - Implicit Assertions', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/auth/login');
        cy.get('.orangehrm-login-branding > img').should('be.visible');
        cy.url().should('contains', 'orange');
        //cy.url().should('contains', 'index');
        cy.url().should('not.be.equal', 'https://opensource-demo1.orangehrmlive.com/auth/login');
        cy.title().should('eql', 'OrangeHRM');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123',{log:false});
        cy.get('.oxd-button').click();
        cy.get('.oxd-brand-banner > img').should('be.visible');
        cy.get('.oxd-brand-banner > img').should('exist');
        cy.get('.oxd-brand-banner > img').should('have.attr', 'alt');
        cy.get('.oxd-brand-banner > img').should('have.attr', 'src');
        cy.get('.oxd-brand-banner > img').should('have.length', '1');
    cy.get('[class="oxd-main-menu-item-wrapper"]:nth-child(5)').find('[href="/recruitment/viewRecruitmentModule"]').should('be.visible');
cy.wait(2000);
    //cy.get('[class="oxd-main-menu-item-wrapper"]:nth-child(8)').find('[href="/web/index.php/dashboard/index"]').find('[height="22"]').should('be.visible');

    })

    it('Reading data from fixtures', ()=>{
        let userdata;
        cy.fixture('pageObject').then((newdata)=>{
            cy.log(newdata.shaila);
            cy.log(newdata.padache);
        })
    })
    })