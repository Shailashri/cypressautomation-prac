describe('View Port Command', ()=>{
    beforeEach(()=>{
        cy.viewport('iphone-xr');
    })
    it('View Port command - MMT', ()=>{
      
        cy.visit('https://tutorialsninja.com/demo/');
        cy.wait(5000);
    })
    it('View Port command - GOIBIBO', ()=>{
      
        cy.visit('https://www.goibibo.com/');
        cy.wait(5000);
    })
    it('View Port command - EASEMYTRIP', ()=>{
      
        cy.visit('https://demo3x.opencartreports.com/admin/');
        cy.wait(5000);
    })
})