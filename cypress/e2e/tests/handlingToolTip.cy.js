describe('Handling Tool Tip',()=>
{
    it('Handling Tool Tip',()=>
    {
        cy.visit('https://practice.expandtesting.com/tooltips')
        cy.get('#btn1').trigger('mouseover')
        cy.get('.tooltip-inner').should('be.visible').should('have.text','Tooltip on top')

    })
})