import { Component, Input } from '@angular/core';
import { IProductService } from '../../services/api-leilao/product/iproduct.service';
import { IFindAllProductsResponse } from '../../services/api-leilao/product/product.models';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-component',
  imports: [CommonModule],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {
  @Input() product!: IFindAllProductsResponse;


  constructor(private router: Router) {}

  goToProduct() {
    this.router.navigate(["/product", this.product.id])
  }
}
