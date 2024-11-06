describe('Radio Button and Check Box ', ()=>{
  it('RadioButton and CheckBox', ()=>{
    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.get('#cookieChoiceDismiss').click();
    //Before performing action
cy.get('[type="radio"]').should('not.be.checked');
cy.get('#male').should('not.be.checked');
cy.get('#female').should('not.be.checked');


// After performing action
cy.get('#male').check().should('be.checked');
cy.get('#female').click();
//cy.get('[type="radio"]').last().check();
cy.get('[type="radio"]').should('have.length', '2');
})  

it('Radio Button and Checkbox',()=>{
  cy.visit('https://testautomationpractice.blogspot.com/');
  cy.get('#cookieChoiceDismiss').click();
cy.get('[type="checkbox"]').check().should('be.checked');
cy.get('[type="checkbox"]').uncheck().should('not.be.checked');
cy.contains('Monday').click();
cy.get('[id="sunday"]').click();
// or cy.get('#sunday').click();


})
})