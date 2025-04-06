import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from '../../services/api-leilao/user/user.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private router: Router, private userService: UserService) {}

  onUpdateAccount() {}

  onDeleteAccount() {
    this.userService.delete().subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigateByUrl("/home")
      },
      error: (err) => {console.log(err)}
    });
  }

  onLogout() {
    localStorage.removeItem("token")
    this.router.navigateByUrl("/login")
  }
}
