describe('Amazon Search',()=>{

    it('amazon search',()=>{
       cy.amazonSearch('imac')
       //cy.amazonSearch('iphone')
       cy.get('.sg-col-14-of-20 > .sg-col-inner').should('include.text','imac')

    })
})