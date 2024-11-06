describe('Data Driven Testing', function(){
    it('Data Driven', ()=>{
        cy.fixture('orangehrm2').then((dataDemo)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            dataDemo.forEach((userData) => {

                cy.get('[name="username"]').type(userData.username);
                cy.get('[name="password"]').type(userData.password);
                cy.get('[type="submit"]').click();   
                if(userData.username == 'Admin' && userData.password == 'admin123');
                {
                    cy.get('.oxd-userdropdown-img').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }
            });
        })
    })
})