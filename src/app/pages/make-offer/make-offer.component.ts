import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OfferService } from '../../services/api-leilao/offer/offer.service';

@Component({
  selector: 'app-make-offer',
  imports: [CommonModule, FormsModule],
  templateUrl: './make-offer.component.html',
  styleUrl: './make-offer.component.css',
  standalone: true
})
export class MakeOfferComponent {
  @Input() productId: number = 0;
  @Output() close = new EventEmitter<void>();

  value: number = 0;

  constructor(private offerService: OfferService) {}

  onSubmit() {
    if (this.value <= 0) {
      alert("Informe um valor válido.");
      return;
    }

    this.offerService.create({value: this.value, productId: this.productId}).subscribe({
      next: () => {
        alert("Oferta enviada com sucesso!");
        this.close.emit();
      },
      error: (err) => {
        console.error(err);
        alert("Erro ao enviar oferta.");
      }
    });
  }

  onCancel() {
    this.close.emit();
  }
}
