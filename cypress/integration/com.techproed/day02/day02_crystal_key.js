describe('Koala Resort Hotel',()=>{

    it('Test Case 1',()=>{
        cy.visit("https://qa-environment.koalaresorthotels.com/");

        cy.contains('Log in').click();

        //Assert 
        //1) url Account/Logon iceriyor mu
        cy.url().should('include','Account/Logon')
        //2) locate edilen yerdeki metin de Log in yaziyor mu
        cy.get('#navLogon > .nav-link').should('have.text','Log in')
        //3) locate edilen yer metin var mi ve ya görünür mü?
        cy.get('.row > .mb-4').should('be.visible')
        //4)title buna esit mi?
        cy.title().should('eq','KoalaResortHotels - Log in')
        //5)locate edilen yerde Log in iceriyor mu?
        cy.get('.row > .mb-4').should('include.text','Log in')
    })

})