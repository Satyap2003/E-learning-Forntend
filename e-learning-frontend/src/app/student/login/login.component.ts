import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Login}from'../../model/login'; // Ensure this is the updated User model with username and password

@Component({
  selector: 'app-login', // Updated the selector to 'app-login'
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html', // Updated the template URL
  styleUrls: ['./login.component.css'] // Updated the style URL
})
export class LoginComponent {
  URL = 'http://localhost:8080/api/login';  // Changed the API endpoint to '/api/login'
  login = new Login(); // Make sure the User class has 'username' and 'password'

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    console.log(this.login);
    this.http.post(this.URL, this.login).subscribe(
      (res) => {
        console.log('Login successful:', res);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
