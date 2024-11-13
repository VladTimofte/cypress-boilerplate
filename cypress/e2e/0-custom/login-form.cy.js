describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('ar trebui să afișeze formularul de autentificare inițial', () => {
    // Verifică dacă elementele formularului de autentificare sunt vizibile
    cy.get('h1').should('be.visible').and('contain.text', 'Login');
    cy.get('input#username').should('be.visible');
    cy.get('input#password').should('be.visible');
    cy.get('button').should('be.visible').and('contain.text', 'Login');
  });

  it('ar trebui să afișeze un mesaj de eroare dacă sunt furnizate date incorecte', () => {
    cy.get('input#username').type('wronguser');
    cy.get('input#password').type('wrongpass');
    cy.get('button').click();
    cy.get('.error-message').should('be.visible').and('contain.text', 'Username and password are incorrect');
  });

  it('ar trebui să se autentifice și să afișeze mesajul "Hello SDA" și butonul de deconectare', () => {
    cy.get('input#username').type('admin');
    cy.get('input#password').type('admin');
    cy.get('button').click();

    cy.get('h1').should('be.visible').and('contain.text', 'Hello SDA');
    cy.get('button.logout-button').should('be.visible').and('contain.text', 'Logout');
    cy.get('.error-message').should('not.exist');
  });

  it('ar trebui să se deconecteze și să afișeze din nou formularul de autentificare', () => {
    // Mai întâi, autentificare
    cy.get('input#username').type('admin');
    cy.get('input#password').type('admin');
    cy.get('button').click();
    
    // Apoi deconectare
    cy.get('button.logout-button').click();
    
    // Verifică dacă formularul de autentificare este vizibil din nou
    cy.get('h1').should('be.visible').and('contain.text', 'Login');
    cy.get('input#username').should('be.visible');
    cy.get('input#password').should('be.visible');
    cy.get('button').should('be.visible').and('contain.text', 'Login');
  });
});
