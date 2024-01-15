export class registrationPage{
    // Locators

    webLocator={
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telePhone:'#input-telephone',
        password:'#input-password',
        confirmPassword:'#input-confirm',
        consent:'input[type="checkbox"]',
        continueBtn:'input[value="Continue"]',     
    }

    //Methods
    visitURL()
    {
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(fName)
    {
        cy.get(this.webLocator.firstName).type(fName)
    }

    enterLastName(lName)
    {
        cy.get(this.webLocator.lastName).type(lName)
    }

    enterEmail(eMail)
    {
        cy.get(this.webLocator.email).type(eMail)
    }

    enterTelephone(phone)
    {
        cy.get(this.webLocator.telePhone).type(phone)  
    }

    // Clubing Password and confirm Password because they have the same value in it.

    enterPassWord(passWord)
    {
        cy.get( this.webLocator.password).type(passWord)
        cy.get( this.webLocator.confirmPassword).type(passWord)
    }

    clickConsent()
    {
        cy.get( this.webLocator.consent).check()
    }
    clickContinueBtn()
    {
        cy.get(this.webLocator.continueBtn).click()   
    }
}