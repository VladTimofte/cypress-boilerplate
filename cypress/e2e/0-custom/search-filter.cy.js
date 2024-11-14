// search-filter

describe("Search and Filter Functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("should display the app", () => {
    cy.contains("Search & Filter Items").should("be.visible");
    cy.get('input[placeholder="Search by name..."]').should("be.visible");
    cy.get('select').should("be.visible");
    cy.get('input[type="number"]').should("have.length", 2);
    cy.contains('button', 'Search').should('be.visible')
  });

  it("should filter items by search text", () => {
    cy.get('input[placeholder="Search by name..."]').type('Laptop')
    cy.contains('button', 'Search').click()
    cy.get('.card').should("have.length", 1);
    cy.contains("Laptop").should("be.visible");
  });

  it("should filter items by category", () => {
    cy.get('select').select('Electronics')
    cy.contains('button', 'Search').click()
    cy.get('.card').each(($el) => {
        cy.wrap($el).contains('Category: Electronics')
    })
    
  });

  it("should filter items by price range", () => {
    cy.get('input').eq(1).clear().type('100')
    cy.get('input').eq(2).clear().type('500')

    cy.contains('button', 'Search').click()

    cy.get('.card').each(($el) => {
        cy.wrap($el).find('p').should('contain', 'Price').then(($priceText) => {
            const price = $priceText.text().replace(/[^0-9.]/g, '');
            const finalPrice = parseFloat(price)
            expect(finalPrice).to.be.within(100, 500)
        })
    })
    
  });

  it("should combine search, category and price filters", () => {
    cy.get('input[placeholder="Search by name..."]').type("Table");
    cy.get('select').select('Furniture')
    cy.get('input').eq(1).clear().type('300')
    cy.get('input').eq(2).clear().type('500')
    cy.contains('button', 'Search').click()

    cy.get('.card').should("have.length", 1);
    cy.contains('Dining Table').should("be.visible");
    cy.contains('Category: Furniture').should("be.visible");
    cy.contains('Price: $400.00').should("be.visible");
    
  });

  it("should combine search, category and price filters", () => {
    cy.get('input[placeholder="Search by name..."]').type("Nonexisting Item");
    cy.contains('button', 'Search').click()

    cy.contains('No items match your criteria.').should("be.visible");
    cy.get('.card').should('have.length', 0)
    
  });
});
