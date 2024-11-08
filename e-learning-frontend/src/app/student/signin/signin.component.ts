import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  URL = 'register/student';
  user = new User();

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    console.log(this.user);
    this.apiService.post(this.URL, this.user).subscribe(
      (res) => {
        console.log('Sign-in successful:', res);
      },
      (error) => {
        console.error('Sign-in error:', error);
      }
    );
  }
}
