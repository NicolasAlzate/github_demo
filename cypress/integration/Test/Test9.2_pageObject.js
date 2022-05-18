/// <reference types="Cypress" />
import HomePage from '../../support/pageObject/HomePage'
import ProductsPage from '../../support/pageObject/ProductsPage'
describe ('Framework Writing and Organizing Test using fixtures', function()
{
    before(function(){
        //Rins once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            //this is to initialize the variable data for out the bucle (using this.data igual al data de la function)
            this.data=data
        })
    })


it ('Demo Example', function () {
const homePage = new HomePage()
const productPage = new ProductsPage()

    cy.visit(Cypress.env('url'))
    // Call the name from the fixture --> example.jason file
    homePage.getEditBox().type(this.data.name)
    // Call the gender from example.json file and use a dropdown to select
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    // How to validate and attribute --- for this case, the minimun lenght is 2 letters for name
    homePage.getEditBox().should('have.attr','minlength','2')
    // Assert
    homePage.getEntrepreneaur().should('be.disabled')
    // This is to wait for an specific time fo next step
    Cypress.config('defaultCommandTimeout',2000)

    homePage.getShopTab().click()
    // Call the support command to reuse the code
    //this.data.productName
    //cy.SelectProduct('Blackberry')
    // Use an array on emple.json ---- this is to select two products using the name 
    this.data.productName.forEach(function(element) {
        cy.SelectProduct(element)
        
    });

    productPage.getCheckOutButton().click()
    var sum=0
    // get the price of the phones 
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{

        const amount=$el.text()
        var res= amount.split(" ")
        res=res[1].trim()
        // conver a string to number using NUMBER
        sum=Number(sum)+Number(res)
        
    }).then(function(){
        cy.log(sum)
    })
    cy.get('h3 strong').then(function(element){
        const amount=element.text()
        var res= amount.split(" ")
        var total=res[1].trim()
        // Assert for equal to total its the same 
        expect(Number(total)).to.equal(Number(sum))

    })
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    // use force true when element its covered by other
    cy.get('#checkbox2').check({force:true})
    cy.get('input[type="submit"]').click()
    //cy.get('alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element)
    {
        const actualText=element.text()
        expect(actualText.includes('Success')).to.be.true
    })

    
   
    
} ) 

})
