describe('Multiple Windows',()=>{
    it.skip('Multiple Windows',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()
        //invoke('removeAttr','Attribute Name')
        //attribute silniyor
        //yeni sekme acmiyor. tiklandiginda ayni pencerede aciyor
        cy.get('h3').should('have.text','New Window')
    })

    it('yeni url de acma',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((elements)=>{
           const newURL = elements.prop('href')
        cy.visit(newURL)
        })
        cy.get('h3').should('have.text','New Window')
        //prop() ile 'href' degerini aldik
        //prop()-> jquery, attribute degerini alan bir method
    })
})