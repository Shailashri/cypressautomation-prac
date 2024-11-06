describe('Mouseover operation Demo', function(){
    it('demo mouse test', ()=>{
//cy.visit('https://tutorialsninja.com/demo/');
//cy.get('.open > .dropdown-menu > .see-all').should('not.be.visible');
cy.visit('https://demo.opencart.com/');
cy.get(':nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible');
cy.get(':nth-child(2) > .dropdown-toggle').trigger('mouseover').click();
cy.get(':nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible');
    })

    it('Right Click', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html');
        //cy.get('.context-menu-one').rightclick(); //below and this both are same
        cy.get('.context-menu-one').trigger('contextmenu');
    })

it('Double Click', ()=>{
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick');
    cy.get('#accept-choices').click();
    cy.frameLoaded('#iframeResult');
    cy.wait(2000);
    cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick();
})

it.only('Drag and Drop', ()=>{
    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    cy.get('#box1').should('be.visible');
    cy.get('#box106').should('be.visible');
    cy.get('#box1').drag('#box106',{force:true});
    cy.get('#box2').drag('#box102',{force:true});
})
})