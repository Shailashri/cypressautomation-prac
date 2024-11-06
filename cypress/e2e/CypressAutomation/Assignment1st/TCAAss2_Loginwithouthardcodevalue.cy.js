describe('Login using same user',()=>{
    it('Login using pageobject file',()=>{
        cy.fixture('pageObjectninja').then((mydata)=>{
            cy.log(mydata.Email);
            cy.log(mydata.Password);

        })
    })
})