import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { JokeComponent } from './joke/joke.components';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { TriviaComponent } from './trivia/trivia.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, LoginFormComponent, ProductListComponent, JokeComponent, ExpenseTrackerComponent, SearchFilterComponent, TriviaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
