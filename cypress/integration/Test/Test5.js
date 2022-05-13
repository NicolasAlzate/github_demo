/// <reference types="Cypress" />

describe ('My Fifth Test Suite', function()
{

it ('My Fifth Test Case', function () {

    // Navigate to
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    
    // Web table (nth-child(2) its for obtain just the second column of the table)
    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
        const text=$e1.text()
        if (text.includes('Python'))
        {
            //This is to find a very next td or the other child of a parent (the third column that has a number)
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText= price.text()
                expect(priceText).to.equal('25')
            })
        }


} )

} ) 

})
