describe('Mocha Test Runner',()=>
{
    beforeEach(function(){
        cy.log("----- Before Each ------")
    })
    afterEach(function()
    {
        cy.log("---- After Each ----")
    })
    before(function()
    {
        cy.log('----- Before -----')
    })
    after(function()
    {
        cy.log('----- After -----')
    })
    it('Mocha Test',()=>
    {
        cy.visit('https://www.google.com')
    })
    it.skip('Mocha Test Skip',()=>
    {
        cy.visit('https://www.google.com')
    })

    it.only('Mocha Test Only',()=>
    {
        cy.visit('https://www.google.com')
    })

})