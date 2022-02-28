describe('custom method',()=>{


    it('login',()=>{
        cy.login('123murat123@gmail.com','123murat123')
        //login -> commands.js de tanimlanan method
        //commands.js de tanimlandigi icin framework'ten ulasabiliyoruz
    })

    it('negativ test',()=>{
        cy.login('123murat123@gmail.com','123murat')
        cy.contains('Authentication failed').should('be.visible')
        cy.url().should('include','controller=authentication')
        cy.screenshot()
    })
})