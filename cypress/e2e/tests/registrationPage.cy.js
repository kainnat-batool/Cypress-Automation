import { registrationPage } from "../../pages/registration"
import registrationData from '../../fixtures/registration.json'
const regObj=new registrationPage()

import {faker} from '@faker-js/faker'

describe('Test Cypress',()=>
{
    before('Before Every Test Case',()=>
    {
        regObj.visitURL();
        
    })
   
    it('test Registration Process',()=>
    {
        regObj.enterFirstName(registrationData.firstName)
        regObj.enterLastName(registrationData.lastName)
        regObj.enterEmail(registrationData.email)
        regObj.enterTelephone(faker.phone.imei())
        regObj.enterPassWord(registrationData.password)
        regObj.clickConsent()
        regObj.clickContinueBtn()
    })
})