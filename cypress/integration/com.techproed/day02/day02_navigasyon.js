describe("Navigasyon", () => {
  it.skip("back, forward, refresh", () => {
      //skip ---> test blogunu calistirmaz
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    cy.wait(2000) //hard wait of cypress
    cy.contains("Log in").click();
    //onceki sayfaya git
    //cy.go("back");
    cy.go(-1)
    cy.wait(2000) //hard wait of cypress
    //sonraki sayfaya git
    //cy.go("forward");
    cy.go(1)
    cy.wait(2000)
    //sayfayi tekrar yükleme
    cy.reload();
  });

  it('zincirleme navigasyon',()=>{
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    cy.contains("Log in").click().go('back').go('forward').go('back');

    cy.reload(true).contains("Log in").should('be.visible');
  })
});
