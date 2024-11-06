describe('Scroll Demo',function(){
    it('Scroll Operation', ()=>{
        cy.visit('https://scroll.in/');
        cy.get('.alert-banner-content > .button').click();
      
        //cy.get('[:nth-child(1) > .row-stories > ul > :nth-child(1) > a > figure > img]').scrollIntoView({ duration: 2000 });
       // cy.get(':nth-child(1) > .row-stories > ul > :nth-child(3) > a > figure > img').scrollIntoView({ duration: 2000 }); Check If i inspect the image not working and with whole element not working 
       cy.get(':nth-child(5) > .row-stories > ul > :nth-child(1) > a > .row-story-meta').scrollIntoView({ duration: 2000 });
   
    })

    it('ScrollTo methid', ()=>{
        cy.visit('https://docs.cypress.io/api/commands/scrollintoview');
        cy.scrollTo('bottom');
        cy.get('.osano-cm-accept-all').click()


    })
})