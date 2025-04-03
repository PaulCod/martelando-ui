import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-home',
  imports: [ LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
