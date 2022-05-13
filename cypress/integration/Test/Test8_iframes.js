/// <reference types="Cypress" />
import 'cypress-iframe'

describe ('Frames Test', function()
{

it ('Demo Example', function () {

    // Navigate To
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

    cy.frameLoaded('#courses-iframe')
    cy.iframe().find("a[href='mentorship']").eq(0).click()
    // Chechk that theres is only two options bronze and the other
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    
} ) 

})
