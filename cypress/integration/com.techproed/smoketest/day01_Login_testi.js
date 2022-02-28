describe("Crystal Key Hotel", () => {
  it("test 1", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    //Login e tikla
    //1. yol
    //cy.get('#navLogon > .nav-link').click();
    //2.yol
    cy.contains("Log in").click();
    //contains() metni text olarak buluyor
    //username : manager
    cy.get("#UserName").type("Manager");
    //password : 'Manager2!
    cy.get("#Password").type("Manager1!");
    cy.get("#btnSubmit").click();
  });
});
