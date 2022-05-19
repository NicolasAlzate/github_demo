/// <reference types="Cypress" />
import HomePage from '../../../../support/pageObject/HomePage'
import ProductsPage from '../../../../support/pageObject/ProductsPage'

import {Given, When,Then, And} from "cypress-cucumber-preprocessor/steps";

// cypress run --spec cypress\integration\Test\BDD\*.feature --headed --browser chrome  --> to run all folder
// npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// add cucumber report options in package.json -> output.json
// use html report plugin /create js file (pass the details of output.json)
// run js file


const homePage = new HomePage()
const productPage = new ProductsPage()
let name

Given('I open Ecommerce website',()=>
{
    cy.visit(Cypress.env('url'))
})
// its necessary to use function here, because data its going to be use in before each 
// so => to replace function its not supported by mocha
When('I add Items to cart',function()
{
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element) {
        cy.SelectProduct(element)
        
    });

    productPage.getCheckOutButton().click()
})


And('Validate the total price',()=>{
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
})


Then('Select the country submit and verify Thank U message',() =>{
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
})

// Second Scenario to use data driven testing with cucumber Data table feature
When('I fill the form details', function (dataTable)
{
    name = dataTable.rawTable[1][0]
    // Call the name from the fixture --> example.jason file
    homePage.getEditBox().type(dataTable.rawTable[1][0]) //rawTable 1 --> |bobz | male  | and 0 its for name
    // Call the gender from example.json file and use a dropdown to select
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('I validate the forms behaviour', function()
{
    homePage.getTwoWayDataBinding().should('have.value',name)
    // How to validate and attribute --- for this case, the minimun lenght is 2 letters for name
    homePage.getEditBox().should('have.attr','minlength','2')
    // Assert
    homePage.getEntrepreneaur().should('be.disabled')
    // This is to wait for an specific time fo next step
    Cypress.config('defaultCommandTimeout',2000)
})

And('Select the shop page', function()
{
    homePage.getShopTab().click()
})