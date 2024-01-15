import { add_to_cart } from "../../pages/addToCart"
import addCart from '../../fixtures/addToCart.json'
import regPage from'../../fixtures/registration.json'

const addToCart= new add_to_cart()
describe('addToCart',()=>
{
    before('Before Every Test Case',()=>
    {
        cy.login(regPage.email, regPage.password)
    })

    it('addToCart',()=>
    {
        addToCart.searchProduct(addCart.product_name)
        addToCart.addToCart()
        addToCart.checkSuccessMessage().should('contain',addCart.success_msg)
    })
})