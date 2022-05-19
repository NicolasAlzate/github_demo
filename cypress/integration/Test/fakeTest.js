/// <reference types="Cypress" />

describe ('My first fakeTest', function()
{

    it ('My FirtsFakeTestCase', function()
    {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        //cy.intercept({requestobject}, {responseobject})
        cy.intercept({
            method : 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            // mock response parameter, lo que estamos haciendo es obtener una respuesta deseada
            // por ejemplo en esta pagina hay muchos libros, sin embargo al mockear la respuesta
            // cuando corremos este test muestra solo un libro disponible 
         {
             statusCode: 200,
             body: [
                 {
                     "book_name": "RestAssured with Java",
                     "isbn": "RSU",
                     "aisle":"2301"
                 } ]
            }).as('bookretrievals')

        cy.get("button[class='btn btn-primary']").click()
        // se almacena la respuesta en una sola variable y se espera por esa respuesta hasta que sea visible
        cy.wait('@bookretrievals').should(({request,response})=>
        {   
            // .body allows function to read body aspects ahead
            cy.get('tr').should('have.length',response.body.length+1)
            
        })
        cy.get('p').should('have.text','Oops only 1 Book available')



    })







})