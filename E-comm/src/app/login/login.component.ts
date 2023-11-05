import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';     // Initialize with an empty string
  password: string = '';  // Initialize with an empty string

  onSubmit() {
    // Handle form submission logic here
  }

  // ... other component code
}
