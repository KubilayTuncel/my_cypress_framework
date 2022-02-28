import HomePage from '../../pageObjectRespository/HomePage'
import LoginPage from '../../pageObjectRespository/LoginPage'

describe('',()=>{
    before(function(){
        cy.fixture('creds').then(function(data){
            this.data=data
        })
    })
    it('',()=>{
        //page object olusturma
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        cy.visit('https://www.paylinn.com')
        homePage.getSigninLink().click()
        loginPage.getUserNameBox().type('User')
        loginPage.getPasswordBox().type('user')
        loginPage.getLoginButton().click()
        loginPage.getWelcomeTextBox().should('have.text','Welcome')
        loginPage.getNavbarHeader().should('include.text','React User')
        .and('include.text','Logout')
    })
})