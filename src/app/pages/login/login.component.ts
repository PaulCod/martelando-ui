import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailPlacesHolder: string = `Digite seu email`;
  passwordPlaceHolder: string = `Digite sua senha`
}
