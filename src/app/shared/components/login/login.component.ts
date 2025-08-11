import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;
  loginError: string | null = null;
  accountService = inject(AccountService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

      rememberMe: [false]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

 onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.loginError = null;

    const { email, password } = this.loginForm.value;

    this.accountService.validateLogin(email, password).subscribe((role) => {
      this.isLoading = false;

      if (role === 'admin') {
        this.router.navigate(['admin/dashboard']);
      } else if (role === 'student') {
        this.router.navigate(['student/dashboard']);
      } else {
        this.loginError = 'Invalid email or password';
      }
    }, (error) => {
      this.isLoading = false;
      this.loginError = 'Error loading user data.';
      console.log(error);
    });
  }

  onForgotPassword(): void {
    // Navigate to Forgot Password page
    this.router.navigate(['/forgot-password']);
  }

  navigateToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  signInWithGoogle(): void {
    // Integrate Google login logic here
    alert('Google login not implemented yet.');
  }

  signInWithMicrosoft(): void {
    // Integrate Microsoft login logic here
    alert('Microsoft login not implemented yet.');
  }
}
