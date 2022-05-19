/// <reference types="Cypress" />

describe ('My first fakeTest', function()
{

    it ('My FirtsFakeTestCase', function()
    {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
        req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'

        req.continue((response)=> 
        {
            //expect(response.statusCode).to.equal(403)

        })

        }
        ).as('dummyUrl')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')

        


    })







})