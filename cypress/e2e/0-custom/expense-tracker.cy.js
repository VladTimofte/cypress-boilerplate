// expense-tracker

describe("Expense Tracker App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("should display the title of the App", () => {
    cy.contains("Expense Tracker for Travel").should("be.visible");
  });

  it("should add a new expense", () => {
    cy.get('input[placeholder="Expense name"]').type("Diner");
    cy.get('input[placeholder="Amount"]').clear().type("200");
    cy.get("select").select("Food");

    cy.contains("Add Expense").click();

    cy.contains("Diner - Food: 200.00 RON").should("be.visible");

    cy.get(".total").should("contain", " 200.00 RON");
  });

  it("should calculate corectly multiple expenses", () => {
    cy.get('input[placeholder="Expense name"]').type("Diner");
    cy.get('input[placeholder="Amount"]').clear().type("200");
    cy.get("select").select("Food");

    cy.contains("Add Expense").click();

    cy.get('input[placeholder="Expense name"]').type("Diner2");
    cy.get('input[placeholder="Amount"]').clear().type("200");
    cy.get("select").select("Food");

    cy.contains("Add Expense").click();

    cy.contains("Total Expense: 400.00 RON").should("be.visible");

    cy.get(".total").should("contain", "400.00 RON");
  });

  it("should delete an expense", () => {
    cy.get('input[placeholder="Expense name"]').type("Diner");
    cy.get('input[placeholder="Amount"]').clear().type("200");
    cy.get("select").select("Food");

    cy.contains("Add Expense").click();

    cy.get(".delete-button").click();

    cy.contains("No expenses added yet.").should("be.visible");
  });
});
