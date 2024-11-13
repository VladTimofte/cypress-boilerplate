// joke

describe('Jokes', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200")
    }) 

    it('should display content', () => {
        cy.get('h1').should('be.visible')
        cy.get('p').should('be.visible')
        cy.get('button').should('be.visible')
    })

    it('should display content when button is pressed', () => {
        cy.get('button').click()
        cy.get('p').should('be.visible')
    })

    it('should display a joke, if the server has an error', () => {
        cy.fixture('joke').then((jokeData) => {
            cy.intercept('GET', 'https://icanhazdadjoke.com/', {
                statusCode: 200,
                body: jokeData
            }).as('jokeResponse')

            cy.get('button').click()

            cy.wait('@jokeResponse')
            cy.get('p').should('contain.text', 'Haha, uite o gluma buna din fixtures!')
        })
    }) 
})