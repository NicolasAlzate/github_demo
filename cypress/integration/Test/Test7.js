/// <reference types="Cypress" />

describe ('My Seventh Test Suite', function()
{

it ('My Seventh Test Case', function () {

    // Navigate to
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    
    //Property method to handle other child window - redirection
    cy.get('#opentab').then(function(el)
    {
        const url=el.prop('href')
        cy.log(url)
        cy.visit(url)
    })
} ) 

})
