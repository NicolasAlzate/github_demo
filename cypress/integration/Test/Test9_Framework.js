/// <reference types="Cypress" />

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

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    // Call the name from the fixture --> example.jason file
    cy.get("body > app-root > form-comp > div > form > div:nth-child(1) > input").type(this.data.name)
    // Call the gender from example.json file and use a dropdown to select
    cy.get('select').select(this.data.gender)
    cy.get("body > app-root > form-comp > div > h4 > input").should('have.value',this.data.name)
    // How to validate and attribute --- for this case, the minimun lenght is 2 letters for name
    cy.get("body > app-root > form-comp > div > form > div:nth-child(1) > input").should('have.attr','minlength','2')
    // Assert
    cy.get('#inlineRadio3').should('be.disabled')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('h4.card-title').each(($el,index,$list)=>{
        if($el.text().includes('Blackberry')) 
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
    
} ) 

})
