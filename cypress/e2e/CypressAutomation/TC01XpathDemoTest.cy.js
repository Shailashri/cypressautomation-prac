describe("Xpath Demo", ()=>{
    it("Xpath Demo", ()=>{
cy.visit("https://tutorialsninja.com/demo/");
cy.wait(1000);
cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
cy.wait(1000);
cy.get('.dropdown-menu > :nth-child(1) > a').click();
    })
})