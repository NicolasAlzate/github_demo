/// <reference types="Cypress" />

describe ('My  Test Suite', function()
{

it ('My Secod Test Case', function () {

    // Navigate to
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get("input[placeholder='Search for Vegetables and Fruits']").type('Ca')
    //wait as a Thread Sleep is using like this
    cy.wait(2000)
    // Selenium use get hit url in browser, cypress get acts like a find element option
    // Should acts as an assert
   
    // Parent Child Chaining
    cy.get('.products').as('productLocator') // we can use "as" for use like a kind of variable declaration
    cy.get("@productLocator").find('.product').each(($el, index, $list) => {
    
   
    const textVeg= $el.find("h4.product-name").text()
    if(textVeg.includes('Cashews'))
    {
    cy.wrap($el).find('button').click() 
    }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get(':nth-child(14)').click()
    


    // fixture


} )

} ) 

