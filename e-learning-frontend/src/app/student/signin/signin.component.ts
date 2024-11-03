import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
onSignIn() {
throw new Error('Method not implemented.');
}
  URL = 'http://localhost:8080/api/signin';
  user = {
    fullname: '',
    dateOfBirth: '',
    dummyAccount: '',
    location: '',
    country: '',
    pincode: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(): void {
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
