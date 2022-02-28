describe("My first Test", () => {
  //describe('fonksiyon ismi', 'test icin olusturulacak fnksiyonlar')
  it("URL Testi", () => {
    //test'i tanimliyoruz. @Test gibi.
    //it('Testin ismi','olusturulacak onksiyonlar')

    //URL adresinde google var mi?
    cy.visit("https://www.google.com/");
    cy.url().should('include','www.google.com')
    //url() url testi icin kullanilir
    //should('icwriyor mu','mesela www.google.com')
  });

  //2. test
  it('Title testi', () => {
      //Title da Google var mi?
      cy.visit("https://www.google.com/")
      cy.title().should('eq','Google')
  })
});
