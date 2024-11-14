describe('Trivia Quiz', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    });
  
    it('should display the initial question on load', () => {
      cy.get('.trivia-container h1').should('contain', 'Trivia Quiz');
      cy.get('.question').should('exist');
      cy.get('.options button').should('have.length', 4);
    });
  
    it('should select a correct answer and increase score', () => {
      cy.get('.question').then(($question) => {
        const questionText = $question.text();
  
        const correctAnswer = getCorrectAnswerForQuestion(questionText);
  
        cy.contains('.options button', correctAnswer).click().should('have.class', 'correct');
        cy.get('.next-button button').click();
  
        cy.get('.question').should('not.contain', questionText);
      });
    });
  
    it('should complete the quiz and display the final score', () => {
      for (let i = 0; i < 20; i++) {
        cy.get('.question').then(($question) => {
          const questionText = $question.text();
          const correctAnswer = getCorrectAnswerForQuestion(questionText);
          cy.contains('.options button', correctAnswer).click();
          cy.get('.next-button button').click();
        });
      }
  
      cy.contains('Quiz Completed!').should('be.visible');
      cy.contains('Your Score:').should('be.visible');
      cy.contains('Restart Quiz').should('be.visible');
    });
  
    it('should restart the quiz after completion', () => {

      for (let i = 0; i < 20; i++) {
        cy.get('.question').then(($question) => {
          const questionText = $question.text();
          const correctAnswer = getCorrectAnswerForQuestion(questionText);
          cy.contains('.options button', correctAnswer).click();
          cy.get('.next-button button').click();
        });
      }
  
      cy.contains('Restart Quiz').click();
  
      cy.get('.question').should('exist');
      cy.get('.options button').should('have.length', 4);
    });
  });
  
  function getCorrectAnswerForQuestion(questionText) {
    const questionMap = {
      "What is the capital of France?": "Paris",
      "What planet is known as the Red Planet?": "Mars",
      "What is the largest ocean?": "Pacific",
      "How many continents are there?": "7",
      "What is the square root of 64?": "8",
      "What year did the Titanic sink?": "1912",
      "Who wrote 'To Kill a Mockingbird'?": "Harper Lee",
      "Which is the smallest country?": "Vatican City",
      "What is the powerhouse of the cell?": "Mitochondria",
      "What is H2O commonly known as?": "Water",
      "How many sides does a hexagon have?": "6",
      "What is the capital of Japan?": "Tokyo",
      "What is the tallest mammal?": "Giraffe",
      "Who painted the Mona Lisa?": "Leonardo da Vinci",
      "What gas do plants absorb?": "Carbon Dioxide",
      "Who invented the telephone?": "Alexander Graham Bell",
      "How many colors are in a rainbow?": "7",
      "What is the smallest unit of life?": "Cell",
      "What is the boiling point of water?": "100°C",
      "What is the largest planet in our solar system?": "Jupiter",
    };
    return questionMap[questionText] || "";
  }
  