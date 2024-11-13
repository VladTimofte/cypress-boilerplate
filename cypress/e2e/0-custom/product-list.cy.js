describe('E-commerce Product List with Cart', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    });

    it('ar trebui să afișeze lista de produse', () => {
      cy.get('h1').should('be.visible').and('contain.text', 'Lista produse');
      cy.get('.product-item').should('have.length', 3);
      cy.get('.product-item').first().should('contain.text', 'Faina 500g');
      cy.get('.product-item').first().should('contain.text', '7.89 RON');
      cy.get('.product-item').eq(1).should('contain.text', 'Ciocolata 200g');
      cy.get('.product-item').eq(1).should('contain.text', '14.99 RON');
      cy.get('.product-item').eq(2).should('contain.text', 'Lapte 1L');
      cy.get('.product-item').eq(2).should('contain.text', '8.46 RON');
    });

    it('ar trebui să permită adăugarea unui produs în coș și să actualizeze cart-ul', () => {
      cy.get('.product-item').first().find('button').click();
      cy.get('.cart-container').should('be.visible');
      cy.get('.cart-item').should('have.length', 1);
      cy.get('.cart-item').first().should('contain.text', 'Faina 500g');
      cy.get('.cart-item').first().should('contain.text', 'Cantitate: 1');
      cy.get('.cart-item').first().should('contain.text', 'Pret: 7.89 RON');
    });

    it('ar trebui să permită adăugarea aceluiași produs de mai multe ori și să actualizeze cantitatea în coș', () => {
      cy.get('.product-item').first().find('button').click();
      cy.get('.product-item').first().find('button').click();
      cy.get('.cart-item').should('have.length', 1);
      cy.get('.cart-item').first().should('contain.text', 'Cantitate: 2');
      cy.get('.cart-item').first().should('contain.text', 'Pret: 15.78 RON');
    });

    it('ar trebui să calculeze corect prețul total în coș', () => {
      cy.get('.product-item').first().find('button').click();
      cy.get('.product-item').eq(1).find('button').click();
      cy.get('.cart-total').should('contain.text', 'Pret total: 22.88 RON');
    });

    it('ar trebui să șteargă toate produsele din coș', () => {
      cy.get('.product-item').first().find('button').click();
      cy.get('.product-item').eq(1).find('button').click();
      cy.get('.clear-cart').click();
      cy.get('.cart-item').should('not.exist');
      cy.get('.cart-total').should('contain.text', 'Pret total: 0.00 RON');
    });
});
