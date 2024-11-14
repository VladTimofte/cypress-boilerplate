import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

@Component({
  selector: 'app-trivia',
  standalone: true,
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TriviaComponent {
  questions: Question[] = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "What planet is known as the Red Planet?", options: ["Mars", "Earth", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What year did the Titanic sink?", options: ["1912", "1905", "1915", "1920"], answer: "1912" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Jane Austen", "J.K. Rowling"], answer: "Harper Lee" },
    { question: "Which is the smallest country?", options: ["Monaco", "Malta", "Vatican City", "Luxembourg"], answer: "Vatican City" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Cell Wall"], answer: "Mitochondria" },
    { question: "What is H2O commonly known as?", options: ["Oxygen", "Hydrogen", "Water", "Salt"], answer: "Water" },
    { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" },
    { question: "What is the capital of Japan?", options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"], answer: "Tokyo" },
    { question: "What is the tallest mammal?", options: ["Elephant", "Giraffe", "Horse", "Kangaroo"], answer: "Giraffe" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "What gas do plants absorb?", options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"], answer: "Carbon Dioxide" },
    { question: "Who invented the telephone?", options: ["Nikola Tesla", "Albert Einstein", "Alexander Graham Bell", "Thomas Edison"], answer: "Alexander Graham Bell" },
    { question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is the smallest unit of life?", options: ["Organ", "Tissue", "Cell", "Molecule"], answer: "Cell" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" }
  ];

  score = 0;
  currentQuestionIndex = 0;
  currentQuestion: Question | null = null;
  selectedAnswer: string | null = null;

  constructor() {
    this.shuffleQuestions();
    this.loadQuestion();
  }

  shuffleQuestions(): void {
    this.questions = this.questions.sort(() => Math.random() - 0.5);
  }

  loadQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex] || null;
    this.selectedAnswer = null;
  }

  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
    if (answer === this.currentQuestion?.answer) {
      this.score++;
    }
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    this.loadQuestion();
  }

  restartQuiz(): void {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.shuffleQuestions();
    this.loadQuestion();
  }
}
