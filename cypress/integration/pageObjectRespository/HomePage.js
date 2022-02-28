class HomePage {
    HomePage(){}
    getSigninLink() { 
        
        return cy.get('[href="/login"] > .header__option > .header__lineTwo')}
}
export default HomePage;