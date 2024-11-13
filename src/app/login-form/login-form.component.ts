import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoggedIn: boolean = false;

  login() {
    // Mock credentials
    const mockUsername = 'admin';
    const mockPassword = 'admin';

    if (this.username === mockUsername && this.password === mockPassword) {
      this.isLoggedIn = true;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Username and password are incorrect';
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
}
