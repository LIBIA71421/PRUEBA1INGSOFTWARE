describe("Post", () => {
    it("Shows the amount of the addition to the user", () => {
      cy.visit("/");
      cy.get("#title").type(4);
      cy.get("#description").type(5);
      cy.get("#postbtt").click();
      cy.get("#resultado-div").should("contain", "9");
    });
  });