describe('Hooks',()=>{

    before('',()=>{
        console.log('Before Method')
    })
    beforeEach(()=>{
        console.log('Before Each Method')
        cy.visit("https://qa-environment.koalaresorthotels.com/");
    })
    after(()=>{
        console.log('After Method')
    })
    afterEach(()=>{
        console.log('After Each Method')
        cy.url().should('include','Account');
    })
    it('test hooks',()=>{
        cy.get('#navLogon > .nav-link').click();
    })
})