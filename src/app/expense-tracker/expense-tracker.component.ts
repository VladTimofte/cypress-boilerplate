import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-tracker',
  standalone: true,
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ExpenseTrackerComponent {
  expenses: { name: string; amount: number; category: string }[] = [];
  newExpense = { name: '', amount: 0, category: '' };
  totalExpense: number = 0;

  addExpense() {
    if (this.newExpense.name && this.newExpense.amount > 0 && this.newExpense.category) {
      this.expenses.push({ ...this.newExpense });
      this.totalExpense += this.newExpense.amount;
      this.newExpense = { name: '', amount: 0, category: '' };
    }
  }

  deleteExpense(index: number) {
    this.totalExpense -= this.expenses[index].amount;
    this.expenses.splice(index, 1);
  }
}
