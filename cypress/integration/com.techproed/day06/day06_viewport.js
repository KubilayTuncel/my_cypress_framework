describe('Viewports',()=>{

    it('test 1',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport('iphone-8')
        cy.screenshot()
    })

    it('test 2',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport('macbook-16')
        cy.screenshot()
    })

    it('test 3',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport(2500,1500)
        cy.screenshot()
    })
})