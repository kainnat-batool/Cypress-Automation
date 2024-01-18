describe('Multi Country Data Handling',()=>
{
    const country_code=['/in/','/uk/','/ca/']
    it('Multi Country',()=>
    {
        country_code.forEach(country => {
            cy.visit(`https://www.apple.com${country}`) 
            cy.url().should('include',country)
            cy.MultiCountry(country).then((country_text)=>
            {   
                cy.get('[title="Choose your country or region"]').should('have.text',country_text)
            })
        });

       
       
    })
})