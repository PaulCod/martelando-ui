import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { FormComponent } from "../../components/form/form.component";
import { ProductService } from '../../services/api-leilao/product/product.service';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "../profile/profile.component";
import { IFindAllProductsResponse } from '../../services/api-leilao/product/product.models';
import { ProductComponentComponent } from "../../components/product-component/product-component.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  isLoggedIn: boolean = false;
  products: IFindAllProductsResponse[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.findAllProducts().subscribe({
      next: (products) => {
        this.products = products
        console.log(products)
      },
      error: (err) => {
        console.error("Erro ao buscar", err)
      }
    })

    var token = localStorage.getItem("token")

    token ? this.isLoggedIn = true : this.isLoggedIn = false
  }

}
