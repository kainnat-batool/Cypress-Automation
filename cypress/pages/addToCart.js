export class add_to_cart{

    // Locators
    webLocators={
        searchBar:'input[name="search"]',
        searchBtn:'.input-group-btn > .btn > .fa',
        product:'nth-child(1) > .product-thumb > .image > a > .img-responsive',
        addToCart:'Add to Cart',
        successMsg:'.alert'
    }


    //Methods

    searchProduct(name){
        cy.get(this.webLocators.searchBar).type(name)
        cy.get(this.webLocators.searchBtn).click()
    }

    addToCart()
    {
        cy.contains(this.webLocators.addToCart).first().click()
    }

    checkSuccessMessage()
    {
       return cy.get(this.webLocators.successMsg)
    }

    
}