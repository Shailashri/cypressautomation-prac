describe('Read Data From Fixture', function(){
    let userData;
    it('Read Data From Fixture',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('orangehrm').then((datademo)=>{
            cy.get('[name="username"]').type(datademo.username);
            cy.get('[name="password"]').type(datademo.password);
            cy.get('[type="submit"]').click();
        })
    })
    it.only('Read the data and store it in global',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangehrm').then((a)=>{
            userData = a;
            cy.get('[name="username"]').type(userData.username);
            cy.get('[name="password"]').type(userData.password);
            cy.get('[type="submit"]').click();
        })
    })
})