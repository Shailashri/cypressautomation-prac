import login from "../../pageObject/loginPage.js";
import forgetPasswordPage from "../../pageObject/forgetPasswordPage.js";
import genericUtils from "../../pageObject/genericUtils.js";

describe('Login Page Validation', ()=>{
    let username,password
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
        username = data.username;
        password = data.password;
        })
    })
    it('Login Successful', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.typeUserName(username);
        login.typePassword(password);
        login.clickLoginBtn();
        genericUtils.waitForSometime({timeout:5000});
        genericUtils.validateElementVisible({locator:'.oxd-userdropdown-tab'});
    })
    it('Login UnSuccessful', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.typeUserName('ad');
        login.typePassword(password);
        login.clickLoginBtn();
        genericUtils.waitForSometime({timeout:5000});
    })

       it('Forget password - Click on Cancel Button', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.clickForgetPassword();
        login.validateURL({url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode'});
        forgetPasswordPage.enterUsernameValue();
        forgetPasswordPage.clickCancelBtn();

    })

})



