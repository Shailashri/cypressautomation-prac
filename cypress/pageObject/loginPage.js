class login {
elements = {
    usernameInput:()=>{ return cy.get('[name="username"]')},
    passwordInput:()=>{ return cy.get('[name="password"]')},
    loginbtn:()=>{ return cy.get('[type="submit"]')},
    forgetPasswordbtn:()=>{ return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]')}
}
    //pageElements
    typeUserName(username)
    {
        this.elements.usernameInput().type(username);
    }

    typePassword(password)
    {
        this.elements.passwordInput().type(password);
    }

    clickLoginBtn()
    {
        this.elements.loginbtn().click();
    }

    clickForgetPassword()
    {
        this.elements.forgetPasswordbtn().click();
    }

    validateURL({url:value})
    {
        cy.url().should('eq',value);
    }
    //PageActions
}
   module.exports = new login();
