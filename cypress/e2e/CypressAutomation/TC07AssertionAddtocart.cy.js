describe('Add to cart',()=>{
    it('Assertion Add to cart',function(){
        cy.visit('https://tutorialsninja.com/demo/');
        //cy.get('div.button-group > button:nth-child(1)').eq(0).click();
        //cy.get(`[onclick="cart.add('43');"]`)// after inspecting the element remove'' and add tilda symbol(CSS Selector)
    cy.xpath('(//button[@type="button"]/i)[4]').click();  //(Xpath)
    
    
    })
})