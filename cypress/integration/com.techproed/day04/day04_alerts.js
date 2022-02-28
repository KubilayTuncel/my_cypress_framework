describe('Alerts',()=>{
    it.skip('Alerts tests',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it.skip('Alerts tests2',()=>{
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 
      cy.get(':nth-child(2) > button').click()
      cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('dismiss Alerts',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm',(str)=>{
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('entring text on the alerts',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window()//pop up pencereleri kontrol ediyoruz
        .then(($windowElement)=>{
            //$windowElement -> prompt'a bilgi girisini sagliyor
            cy.stub($windowElement,'prompt').returns('Hi')
            cy.wait(3000)
            cy.get(':nth-child(3) > button').click()
        })
        cy.get('#result').should('have.text','You entered: Hi')
    })
})