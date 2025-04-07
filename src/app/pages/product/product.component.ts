import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/api-leilao/product/product.service';
import { OfferService } from '../../services/api-leilao/offer/offer.service';
import { ICreateProductResponse } from '../../services/api-leilao/product/product.models';
import { IFindOffersByProductIdResponse } from '../../services/api-leilao/offer/offer.models';
import { CommonModule } from '@angular/common';
import { MakeOfferComponent } from "../make-offer/make-offer.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product.component.html',
  imports: [CommonModule, MakeOfferComponent],
  styleUrl: './product.component.css',

  standalone: true
})
export class ProductComponent implements OnInit {
  product?: ICreateProductResponse;
  offers: IFindOffersByProductIdResponse[] = [];
  showOfferPopup: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private offerService: OfferService
  ) {}

  openOfferPopup() {
    if(!this.product) {
      alert("Produto nao carregado")
      return;
    }
    this.showOfferPopup = true;
  }

  closeOfferPopup() {
    this.showOfferPopup = false;
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (!productId) return;

    this.productService.findByProductId(productId).subscribe({
      next: (product) => {
        console.log(product)
        this.product = product;
      },
      error: (err) => console.error('Erro ao buscar produto', err)
    });

    this.offerService.findByProductId(Number(productId)).subscribe({
      next: (offers) => {
        console.log(offers)
        this.offers = offers;
      },
      error: (err) => console.error('Erro ao buscar ofertas', err)
    });
  }
}
