import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { AuthService } from '../admin/auth.service';
import { AuthModel } from '../model/auth-model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authModel = new AuthModel();
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.authService.login(this.authModel).subscribe(
        success => {
          if (success) {
            this.authService.loginuserData = this.authModel;
            this.authService.loginSuccess = true;
          } else {
            this.loginError = true;
            this.authService.loginSuccess = false;
          }
        },
        () => (this.loginError = true) // Handle error response
      );
    }
  }
}
