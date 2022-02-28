describe('Paylinn bank',()=>{
    before(function(){
        cy.fixture('creds').then(function(data){
            this.data=data
        })
    })

    it('Paylinn bank login testi',()=>{
        cy.visit('https://www.paylinn.com')
        cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.username)
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.password)
        cy.get('.MuiButtonBase-root').click()
        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('have.text','Welcome')
        
    })
})