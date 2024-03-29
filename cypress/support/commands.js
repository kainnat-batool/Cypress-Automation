// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
Cypress.Commands.add('login',(email,password)=>
{
    cy.visit('') // this will directly hit baseurl from config file.
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('input[value="Login"]').click()
})

Cypress.Commands.add('authHandling',()=>
{
    cy.visit('https://authenticationtest.com/HTTPAuth/',{
            auth:{
                username:'user',
                password:"pass"
            }
        })
})


Cypress.Commands.add('MultiCountry',(country_code)=>
{
    switch (country_code)
    {
        case '/in/':
            return 'India'
        case '/uk/':
            return 'United Kingdom'
        case '/ca/':
            return 'Canada (English)'
        default:
            'United Kingdom'
    }
    
})