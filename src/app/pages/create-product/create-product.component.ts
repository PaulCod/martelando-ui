import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/api-leilao/product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  title: string = '';
  imageUrl: string = '';
  initialOffer: number = 0.0;
  description: string = '';
  status: string = 'ACTIVE';
  startAt: Date | null = null;
  endAt: Date | null = null;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  validate(): string | null {
    if (!this.title || this.title.trim().length < 5 || this.title.length > 250)
      return 'Título deve ter entre 5 e 250 caracteres.';

    if (!this.imageUrl.trim())
      return 'URL da imagem é obrigatória.';

    if (!this.description || this.description.trim().length < 10 || this.description.length > 1000)
      return 'Descrição deve ter entre 10 e 1000 caracteres.';

    if (this.initialOffer === null || this.initialOffer <= 0)
      return 'Oferta inicial deve ser maior que 0.';

    return null;
  }


  onSubmit() {

    let message = this.validate()

    if(message) {
      alert(message)
      return
    }

    const product = {
      title: this.title,
      image_url: this.imageUrl,
      initial_offer: this.initialOffer,
      description: this.description,
      status: this.status,
      start_at: this.startAt,
      end_at: this.endAt
    };

    console.log(product)

    this.productService.create(product).subscribe({
      next: () => {
        this.router.navigate(['/my-products']);
      },
      error: (error) => {
        console.error('Erro ao criar produto:', error);
      }
    });
  }
}
