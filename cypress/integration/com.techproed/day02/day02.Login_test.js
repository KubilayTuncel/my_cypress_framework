describe("Log in", () => {
  //const eMail ="qwert@gmail.com"
  //const ePassword ='qwert'

  const eMail = "cypress_test_1@gmail.com";
  const ePassword = "admin_123";

  it.skip("Log in negatif", () => {
    cy.visit("https://test.iyikisordun.com/login.php/");
    cy.get('[type="email"]').type(eMail);
    cy.get('[type="password"]').type(ePassword);
    cy.get(".btn").click();
    cy.get("#fail").should("include.text", "Girdiğiniz bilgiler hatalıdır.");
    //fail beklemedigimiz durumlarda kullanabiliriz.
  });
  it("Log in pozitif", () => {
    cy.visit("https://test.iyikisordun.com/login.php/");
    cy.get('[type="email"]').type(eMail);
    cy.get('[type="password"]').type(ePassword);
    cy.get(".btn").click();
  });
});
