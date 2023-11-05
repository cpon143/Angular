import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    // Implement signup logic here (e.g., sending data to a server)
    // If the registration is successful, navigate to the login page
    this.router.navigate(['/login']);
}

navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
