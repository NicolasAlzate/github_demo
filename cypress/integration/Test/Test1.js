/// <reference types="Cypress" />

describe ('My first Test Suite', function()
{

it ('My first Test Case', function () {

    // Navigate to
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get("input[placeholder='Search for Vegetables and Fruits']").type('Ca')
    //wait as a Thread Sleep is using like this
    cy.wait(2000)
    // Selenium use get hit url in browser, cypress get acts like a find element option
    // Should acts as an assert
    cy.get('.product').should('have.length',5)
    cy.get(".product:visible").should('have.length',4)
    // Parent Child Chaining
    cy.get('.products').as('productLocator') // we can use "as" for use like a kind of variable declaration
    cy.get("@productLocator").find('.product').should('have.length',4)
    // add to cart product 2 (kind of filter)
    cy.get("@productLocator").find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
        console.log('sf') //this means that only when the clicking was made, console will show sf on inpection options -> console
    })
    cy.get("@productLocator").find('.product').each(($el, index, $list) => {
    
    //$el its a promise so its neccesary to use .wrap to do the click
    const textVeg= $el.find("h4.product-name").text()
    if(textVeg.includes('Cashews'))
    {
    cy.wrap($el).find('button').click() 
    }
    })
    // This is an assert if logo is correctly displayed 
    cy.get('.brand').should('have.text','GREENKART')
    // You must open a fuction to use a promise .then(function), this is how cypress books a const
    // This is to print in logs
    cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    })
     
    
    
    // fixture


} )

} ) 

