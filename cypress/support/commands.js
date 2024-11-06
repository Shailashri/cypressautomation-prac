// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// <reference types="cypress" />
import 'cypress-iframe';

require('@4tw/cypress-drag-drop')

Cypress.Commands.add('loginApplication',(email,password)=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/auth/login');
    cy.get('[name="username"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
})

Cypress.Commands.add('verifyMenuItem',(menuitem)=>{
    cy.get('[class="oxd-main-menu-item"]').each(($el, index, $list)=>{
        let shaila = $el.text();
        //cy.log(shaila);
        if(shaila == 'menuitem')
        {
            cy.log('FOUND');
        }
        else{
            cy.log('NOT FOUND')
        }
       })
})

import 'cypress-file-upload';