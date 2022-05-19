// cucumber supports mocha hooks
beforeEach(function(){
    cy.fixture('example').then(function(data)
    {
        //this is to initialize the variable data for out the bucle (using this.data igual al data de la function)
        this.data=data
    })
})