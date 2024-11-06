class genericUtil
{
    waitForSometime({timeout:time})
    {
        cy.wait(time);
    }
    validateElementVisible({locator:element})
    {
        cy.get(element).should('be.visible');
    }
}
module.exports = new genericUtil();