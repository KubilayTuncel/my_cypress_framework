describe('scroll',()=>{

    it('scroll into view',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        //sayfa da istenilen yere dogru sayfayi kaydirir
        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('.col-md-7 > h2 > span').scrollIntoView()
        //en asagiya git
        cy.scrollTo('bottom')
        //en yukari gider
        cy.wait(2000)
        cy.scrollTo('top')

        cy.scrollTo(0,1000) //1000px down
        cy.wait(2000)
        cy.scrollTo(0,-500) //500px up

    })
})