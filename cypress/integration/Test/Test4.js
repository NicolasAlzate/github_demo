/// <reference types="Cypress" />

describe ('My Fourth Test Suite', function()
{

it ('My Fourth Test Case', function () {

    // Navigate to
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    //Window: Alert
    cy.on('window:alert',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    //Window:confirm
    cy.on('window:confirm',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    // This is for when we need to click on button but that button redirects us to other page in other window
    // Target is the Dom attribute that open a page in other window
    cy.get('#opentab').invoke('removeAttr','target').click()

    // Validation with url, get the correct URL
    cy.url().should('include','rahulshettyacademy')

    // Go to previous html
    cy.go('back')

} )

} ) 

