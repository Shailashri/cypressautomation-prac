describe("Orange HRM", function(){
    it("TC-01 Orange HRM - Validate home page", function(){
        cy.visit({
        url:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
     })
     cy.get('.orangehrm-login-branding > img').should('be.visible');
    })

    it("TC-02 Orange HRM Login Tc", function(){
        cy.visit({
        url:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
     })
cy.get('[name="username"]').type("Admin");
cy.get('[name="password"]').type("admin123",{log:false});
cy.get('[type="submit"]').click();

    })
})