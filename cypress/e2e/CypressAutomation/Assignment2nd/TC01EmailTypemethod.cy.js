describe('example.io.cypress', function(){
    it('email demo test',()=>{
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('[class="form-control action-email"]').type('fake@gmail.com');
        cy.get('[class="form-control action-email"]').should('have.value', 'fake@gmail.com');
    // .type()with special character sequence
    //cy.wait(2000);
        cy.get('[class="form-control action-email"]').type('{leftarrow}{rightarrow}{uparrow}{downarrow}');
// Check not able to see any changes with the above syntax
        cy.get('[class="form-control action-email"]').type('{del},{selectAll},{backspace}');

//.type() with Key modifiers
       cy.get('[class="form-control action-email"]').type('{alt}{option}');
       cy.get('[class="form-control action-email"]').type('{ctrl}{control}');
       cy.get('[class="form-control action-email"]').type('{meta}{command}{cmd}');
       cy.get('[class="form-control action-email"]').type('{shift}');
// Delay each keypress by 0.1 sec
       cy.get('[class="form-control action-email"]').type('abc@gmail.com',{delay:100});
       cy.get('[class="form-control action-email"]').should('have.value', 'abc@gmail.com');

// Ignore error checking prior to type
  // like whether the input is visible or disabled
       cy.get(':nth-child(2) > .form-control').type('disabled errors checking of the code',{force:true});
       cy.get(':nth-child(2) > .form-control').should('have.value', 'disabled errors checking of the code');
  
    })
    
})