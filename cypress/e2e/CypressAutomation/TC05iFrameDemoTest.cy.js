describe('iframedemo Test', ()=>{
    it.skip('Iframe Demo Test',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#cookieChoiceDismiss').click();
        cy.frameLoaded('#frame-one796456169');
        cy.iframe().find('[type="radio"]').should('be.visible').check();
    })
    it.skip('Iframe demo using Internet app', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').should('be.visible');
    })
    it.only('W3 school demo', ()=>{
        //cy.get('body').click();
        cy.visit('https://www.w3schools.com/html/html_iframe.asp');
        cy.get('#accept-choices').click();
        cy.frameLoaded('[title="W3Schools HTML Tutorial"]');
        cy.contains('CSS').click();
        
    })
})
