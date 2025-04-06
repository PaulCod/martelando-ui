import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/api-leilao/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  emailPlacesHolder: string = `Digite seu email`;
  passwordPlaceHolder: string = `Digite sua senha`;

  email: string = ""
  password: string = ""

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let token
  }

  onSubimit() {
    this.authService.login({email: this.email, password: this.password}).subscribe({
      next: (response) => {
        localStorage.setItem("token", response.token)
        this.router.navigateByUrl("/")
      },
      error: (err) => {
        console.log(err.error)
      }
    })
  }
}
