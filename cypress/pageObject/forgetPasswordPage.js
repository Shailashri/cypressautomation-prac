class forgetPassword{
    elements={
        usernameInput:()=>{return cy.get('[name="username"]')},
        cancelBtn:()=>{return cy.get('[type="button"]')},
        resetPasswordBtn:()=>{return cy.get('[type="submit"]')}
    }
    clickCancelBtn()
    {
        this.elements.cancelBtn().click();
    }
    enterUsernameValue()
    {
        this.elements.usernameInput().type('ads');
    }
    clickResetPasswordBtn()
    {
        this.elements.resetPasswordBtn().click();
    }

}
module.exports = new forgetPassword();