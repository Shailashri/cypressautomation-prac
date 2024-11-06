 //use it.only for perticular TC to run and it.skip to skip the perticular TC

describe('nop Commerce', function(){
 it('TC01- validate the home page', ()=>{
    cy.visit('https://www.amazon.se/');
    cy.get('[href="/gp/cart/view.html/ref=nav_bb_cart"]').click();
    cy.get('[name="accept"]').click();
     //cy.get('#sp-cc-rejectall-link').click();
    cy.get('#nav-logo-sprites').should('to.be.visible');
    // cy.wait(2000);
     })

    it('TC02- Amazon Login with Valid EmailId and password TC', ()=>{
    cy.visit('https://www.amazon.se/');
    cy.get('[href="/gp/cart/view.html/ref=nav_bb_cart"]').click();
    //cy.get('#sp-cc-rejectall-link').click();
    cy.get('[name="accept"]').click();
    cy.get('[class="nav-a nav-a-2 icp-link-style-2"]').click();
    cy.get(':nth-child(6) > .a-radio > label > .a-icon').click();
    cy.get('[class="a-button-input"]').click();
    cy.get('[id="nav-link-accountList-nav-line-1"]').click();
    //cy.get('[class="action-inner"]').click();
    cy.get('#ap_email').click();
    //cy.wait(2000);
    cy.get('[name="email"]').type('magadumshaila@gmail.com');
    cy.get('[class="a-button a-button-span12 a-button-primary"]').click();
    cy.get('[name="password"]').type('Mitisha@2020');
    cy.get('[id="signInSubmit"]').click();
    //cy.pause(); // Pause the test for manual CAPTCHA entry
    //cy.get('.a-input-text').type('f55mg5');// Manually enter CAPTCHA solution
    //cy.get('.a-button-input').click()
    //cy.get('.a-input-text', { timeout: 10000 }).should('be.visible').type('pwby53') ; 
    //y.wait(2000);
    //cy.get('.a-button-input', { timeout: 10000 }).should('not.be.disabled').click();   
    //cy.get('.a-button-input').click();               
      
})

     it.only('TC03 - Amazon login with Invalid email and valid password TC', ()=>{
        cy.visit('https://www.amazon.se/');
        cy.get('[href="/gp/cart/view.html/ref=nav_bb_cart"]').click();
        //cy.get('#sp-cc-rejectall-link').click();
        cy.get('[name="accept"]').click();
        cy.get('[class="nav-a nav-a-2 icp-link-style-2"]').click();
        cy.get(':nth-child(6) > .a-radio > label > .a-icon').click();
        cy.get('[class="a-button-input"]').click();
        cy.get('[id="nav-link-accountList-nav-line-1"]').click();
        //cy.get('[class="action-inner"]').click();
        cy.get('#ap_email').click();
        //cy.wait(2000);
        cy.get('[name="email"]').type('magadum@gmail.com');
        //cy.get('.a-button-inner > #continue').click();
        cy.get('[class="a-button a-button-span12 a-button-primary"]').click();
        cy.get('[name="password"]').type('Mitisha@2020');
        cy.get('[id="signInSubmit"]').click();
        cy.wait(2000);
        cy.get('.a-input-text').type('r35'); //captcha
        cy.get('.a-button-input').click();
        //cy.pause(); // Pause the test for manual CAPTCHA entry
       //cy.get('.a-input-text').type('f55mg5');// Manually enter CAPTCHA solution
       //cy.get('.a-button-input').click()
       //cy.get('.a-input-text', { timeout: 10000 }).should('be.visible').type('pwby53') ; 
       //cy.wait(2000);
       //cy.get('.a-button-input', { timeout: 10000 }).should('not.be.disabled').click();   
       //cy.get('.a-button-input').click(); 
     })

     it.skip('TC04 - Amazon login with valid email and Invalid password TC', ()=>{
        cy.visit('https://www.amazon.se/');
        cy.url().should('not.be.equal','https://www.ama');
        cy.get('[href="/gp/cart/view.html/ref=nav_bb_cart"]').click();
        cy.get('[name="accept"]').click();
        cy.get('[class="nav-a nav-a-2 icp-link-style-2"]').click();
         cy.get(':nth-child(6) > .a-radio > label > .a-icon').click();
         cy.get('[class="a-button-input"]').click();
        cy.get('[id="nav-link-accountList-nav-line-1"]').click();
        cy.get('[class="action-inner"]').click();
         cy.wait(2000);
        cy.get('[name="email"]').type('magadumshaila@gmail.com');
        cy.get('[class="a-button a-button-span12 a-button-primary"]').click();
        cy.get('[name="password"]').type('Mitis020');
        cy.wait(2000);
        cy.get('.a-checkbox > label > input').click();
        cy.get('#signInSubmit').click();
        //cy.get('[id="signInSubmit"]').click();
        cy.get('.a-input-text').type('r35');
        cy.get('.a-button-input').click();
       
     })

     it.skip('TC05 - Amazon login with Null value as email and password TC', ()=>{
        cy.visit('https://www.amazon.se/');
        cy.url().should('not.be.equal','https://www.ama');
        cy.get('[href="/gp/cart/view.html/ref=nav_bb_cart"]').click();
        cy.get('[name="accept"]').click();
        cy.get('[class="nav-a nav-a-2 icp-link-style-2"]').click();
         cy.get(':nth-child(6) > .a-radio > label > .a-icon').click();
         cy.get('[class="a-button-input"]').click();
        cy.get('[id="nav-link-accountList-nav-line-1"]').click();
        cy.get('[class="action-inner"]').click();
        cy.get('[name="email"]').type('0');
        cy.get('.a-button-inner > #continue').click();
        cy.get('[name="password"]').type('0');
        cy.get('#signInSubmit').click();
})
})