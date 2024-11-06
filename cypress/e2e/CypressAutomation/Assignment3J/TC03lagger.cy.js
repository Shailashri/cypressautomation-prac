 //use it.only to run perticular TC and
// it.skip to skip the perticular TC
//  Positive TC
describe('lagger', function(){
    it('TC01 -Validate Home page TC', ()=>{
        cy.visit('https://lager157.com/sv-se/');
        cy.get('[alt="Lager157 Logotype"]').should('be.visible');
       
    })
    // Positive TC
    it('TC02 -login with Valid Username and password TC', ()=>{
        cy.visit('https://lager157.com/sv-se/');
        cy.url().should('equal', 'https://lager157.com/sv-se/');
        cy.url().should('contains', '157');
        cy.url().should('not.be.equal', 'lager157');
        cy.get('[class="coi-consent-banner__agree-button"]').click();
        cy.get('[class="SimpleStyles-16832039751294426-Image"]').click();
        cy.get('[name="identifier"]').type('magadumshaila@gmail.com');
        cy.get('[type="password"]').type('Mitisha@2020');
        cy.get('.CMS-MyPagesLogin-button').click();
        cy.get('.SimpleStyles-16782804357992946-Media').should('be.visible');
        cy.get(':nth-child(3) > [data-style-attr="Node_Content_Level_1"] > .CMS-SubMenuNode-title > .Link').should('exist');
    })
    // Negative TC
    it('TC03 - Login with Invalid user and Invalid password TC',()=>{
        cy.visit('https://lager157.com/sv-se/');
        cy.get('[class="coi-consent-banner__agree-button"]').click();
        cy.get('[class="SimpleStyles-16832039751294426-Image"]').click();
        cy.get('[name="identifier"]').type('magadumsmail.com');
        cy.get('[type="password"]').type('Miti020');
        cy.get('.CMS-MyPagesLogin-button').click();
    })
      // Negative TC
    it('TC04 - Login with null value TC',()=>{
        cy.visit('https://lager157.com/sv-se/');
        cy.get('[class="coi-consent-banner__agree-button"]').click();
        cy.get('[class="SimpleStyles-16832039751294426-Image"]').click();
        cy.wait(2000);
        cy.get('[name="identifier"]').type('0');
        cy.get('[type="password"]').type('0');
        cy.get('.CMS-MyPagesLogin-button').click();
    })
      // Negative TC
    it('TC05 - Login with Empty String TC',()=>{
        cy.visit('https://lager157.com/sv-se/');
        cy.get('[class="coi-consent-banner__agree-button"]').click();
        cy.get('[class="SimpleStyles-16832039751294426-Image"]').click();
        cy.wait(2000);
        cy.get('[name="identifier"]').type('');
        cy.get('[type="password"]').type('');
        cy.get('.CMS-MyPagesLogin-button').click();
    })
it.only('TC06 - Adding items to the cart with register user', ()=>{
    cy.visit('https://lager157.com/sv-se/');
    cy.get('[class="coi-consent-banner__agree-button"]').click();
    cy.get('[class="SimpleStyles-16832039751294426-Image"]').click();
    cy.get('[name="identifier"]').type('magadumshaila@gmail.com');
    cy.get('[type="password"]').type('Mitisha@2020');
    cy.get('.CMS-MyPagesLogin-button').click();
    cy.get(':nth-child(3) > [data-style-attr="Node_Content_Level_1"] > .CMS-SubMenuNode-title > .Link').click();
    cy.get('[data-id="16783522212309480"] > .CMS-Component > .CMS-BlurbCustomContent-image > .Link > .Preset-BlurbCustomContent-image').click();
    cy.get('.u-sizeFull > .CMS-Component > .CMS-BlurbCustomContent-image > .Link > .Preset-BlurbCustomContent-image', { multiple: true });
    cy.get('[data-id="16788868602137694"] > .CMS-Component > .CMS-BlurbCustomContent-image > .Link > .Preset-BlurbCustomContent-image').click();
    cy.get('[data-id="16847533806341204"] > .CMS-Component > .CMS-AttributeName-container > .CMS-AttributeName-attributes > :nth-child(8) > .CMS-AttributeName > .CMS-AttributeName-attribute').click();
    cy.get('.CMS-Article-buyButton').click();
    cy.get(':nth-child(2) > .CMS-AttributeMedia > .Image').click();
    cy.get('#Grid-Image-0 > img').click();
    cy.get('[data-id="16847533806341204"] > .CMS-Component > .CMS-AttributeName-container > .CMS-AttributeName-attributes > :nth-child(3) > .CMS-AttributeName > .CMS-AttributeName-attribute').click();
    cy.get('.CMS-Article-buyButton').click();
    cy.get('.SimpleStyles-16784419449091796-Media').click();
    cy.get('.CMS-CheckoutShipping-zipcodeWrapper > .Form > .FormField > .FormField-controls > input').type('15173');
    cy.get('.CMS-CheckoutShipping-zipcodeButton').click();
})
})