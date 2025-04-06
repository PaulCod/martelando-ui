import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/api-leilao/user/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = ""
  email: string = ""
  phone: string = ""
  password: string = ""

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    let err = this.validate()

    if (err) {
      console.log(err)
      return
    }

    this.userService.save({
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password}).subscribe({
        next: (res) => {
          this.router.navigateByUrl("/login")
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  validate() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (this.name.length < 3) {
      return "Nome deve ter mais de 2 caracteres"
    }

    if(!emailRegex.test(this.email)) {
      return "Email invalido"
    }

    if (this.password.length < 5) {
      return "Senha deve ter ao menos 5 caracteres"
    }

    if(this.phone.toString().length != 11) {
      return  "Telefone deve ter 11 numeros"
    }

    return null
  }
}
