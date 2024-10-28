import { CommonModule } from '@angular/common';
import { Component, Input, Pipe } from '@angular/core';
import { Product } from '@models/product.model';
import { ImageComponent } from "../image/image.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ImageComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
}
