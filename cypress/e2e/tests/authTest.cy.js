describe("Handling AUth",()=>
{
    it('APP1 -- Handling Auth',()=>
    {
        cy.visit('https://authenticationtest.com/HTTPAuth/',{
            auth:{
                username:'user',
                password:"pass"
            }
        })
        cy.contains('Login Success').should('be.visible')
    })

    it('APP2 -- Handling Auth',()=>
    {
        cy.visit('https:user:pass@//authenticationtest.com/HTTPAuth/')
        cy.contains('Login Success').should('be.visible')
    })

    it('APP3 -- Handling Auth',()=>
    {
        cy.authHandling()
        cy.contains('Login Success').should('be.visible')
    })

    it('APP4 -- Handling Auth',()=>
    {
        cy.visit('https://authenticationtest.com/HTTPAuth/',{
            auth:{
                username:Cypress.env.username,
                password:Cypress.env.password
            }
        })
        cy.contains('Login Success').should('be.visible')
    })
})