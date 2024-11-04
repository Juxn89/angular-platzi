import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '@models/product.model';
import { ReversePipe } from '@pipes/reverse.pipe';
import { ImageComponent } from '@components/image/image.component';
import { HighlightDirective } from '../../directives/highlight.directive';
import { TruncateTextPipe } from '@pipes/truncate-text.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ImageComponent, ReversePipe, HighlightDirective, TruncateTextPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addedProduct = new EventEmitter<Product>()
  @Output() showProduct = new EventEmitter<number>()

  AddToCart() {
    this.addedProduct.emit(this.product)
  }

  ShowDetail() {
    this.showProduct.emit(this.product.id)
  }
}
