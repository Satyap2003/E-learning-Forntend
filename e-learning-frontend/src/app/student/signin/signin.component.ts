import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  URL = 'http://localhost:8080/api/signin';
  user = new User();

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    console.log(this.user);
    this.http.post(this.URL, this.user).subscribe(
      (res) => {
        console.log('Sign-in successful:', res);
      },
      (error) => {
        console.error('Sign-in error:', error);
      }
    );
  }
}
