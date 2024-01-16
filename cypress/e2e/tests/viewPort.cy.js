describe('View Port Testing', ()=>
{
    it('T1 View Port Height and width',()=>
    {
        // cy.viewport(550,750)
        cy.visit('https://www.daraz.pk/')
    })

    it('T2 View Port Height and width With Preset',()=>
    {
        // cy.viewport('iphone-8')
        cy.visit('https://www.daraz.pk/')
    })

    it('T3 View Port Height and width with prest and orientation',()=>
    {
        // cy.viewport('iphone-8','portrait')
        cy.visit('https://www.daraz.pk/')
    })
})