class HomePage {

    getEditBox(){
        return cy.get("body > app-root > form-comp > div > form > div:nth-child(1) > input")
    }

    getTwoWayDataBinding(){
        return  cy.get("body > app-root > form-comp > div > h4 > input")
    }

    getGender (){
        return cy.get('select')
    }

    getEntrepreneaur(){
        return cy.get('#inlineRadio3')
    }
    
    getShopTab (){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;