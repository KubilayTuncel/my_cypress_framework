describe('hover over',()=>{

    it('move over',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover');
        //trigger () mouse haraket ettirir
        //change country/region
        cy.contains('Change country/region',{force: true}).click();

        //select
        cy.get('#icp-selected-country').select('Canada',{force: true})
        //dropdown elementleri acmak icin kullaniyoruz
    })
})