/// <reference types="Cypress" />

describe ('JWT Session', () =>
{

    it ('is logged in through local storage', ()=>
    {
        cy.LoginAPI().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client',
            {   
                // hacer antes de abrir el URL
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
    })

})