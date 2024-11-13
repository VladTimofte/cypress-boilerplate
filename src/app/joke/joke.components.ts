import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class JokeComponent {
  joke: string = 'Press the button to retrieve a joke';

  // Function to fetch a joke
  async fetchJoke(): Promise<void> {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      const data = await response.json();
      this.joke = data.joke;
    } catch (error) {
      console.error('Error fetching joke:', error);
      this.joke = 'Oops! Something went wrong.';
    }
  }
}
