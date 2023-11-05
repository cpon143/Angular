import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  showSuccessMessage: boolean = false;
  errorMessage: string = '';

  onSubmit() {
    // Simulate a password change request (replace with your actual logic)
    if (this.newPassword === this.confirmPassword) {
      // Passwords match, consider the password changed successfully
      this.showSuccessMessage = true;
      this.errorMessage = ''; // Clear any previous error messages
    } else {
      this.showSuccessMessage = false;
      this.errorMessage = 'Passwords do not match. Please try again.';
    }
  }
}
