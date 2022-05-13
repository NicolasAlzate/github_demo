/// <reference types="Cypress" />

describe ('My  Test Suite', function()
{

it ('My Secod Test Case', function () {

    // Navigate to
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    //.check its for checkboxes instead click
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    // Value will help us to check just the options that we want
    cy.get('input[type="checkbox"]').check(['option2','option3'])
   
    // Static Dropdown
    cy.get('select').select('option2').should('have.value','option2')

    // Dynamic Dropdown

    cy.get('#autocomplete').type('ind')
    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
        if($e1.text()==="India")
        {
            cy.wrap($e1).click()
        }
    })
      
    // Assert
    cy.get('#autocomplete').should('have.value','India')


    // Visible and invisible elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    // Radio button
    cy.get('[value="radio2"]').check().should('be.checked')
    



} )

} ) 

