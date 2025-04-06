import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from '../../services/api-leilao/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  name: string = ""
  email: string = ""
  password: string = ""
  phone: string = ""

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.findByUserId().subscribe({
      next: (response) => {
        this.name = response.name
        this.email = response.email
        this.phone = response.phone
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onUpdateAccount() {
    this.userService.update({name: this.name, phone: this.phone, password: this.password}).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onDeleteAccount() {
    this.userService.delete().subscribe({
      next: (res) => {
        console.log(res)
        localStorage.removeItem("token")
        this.router.navigateByUrl("/")
      },
      error: (err) => {console.log(err)}
    });
  }

  onLogout() {
    localStorage.removeItem("token")
    this.router.navigateByUrl("/login")
  }
}
