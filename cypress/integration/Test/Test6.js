/// <reference types="Cypress" />

describe ('My Fifth Test Suite', function()
{

it ('My Fifth Test Case', function () {

    // Navigate to
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    
    // Show method should be applied on inmmediate parent of hidden element, 
    cy.get('div.mouse-hover-content').invoke('show')
    //cypress has the ability to click on hidden elements by using force
    cy.contains('Top').click({force: true})
    cy.url().should('include','top')


} ) 

})
