import { Component, Input, signal } from '@angular/core';
import { Product } from '../counter/models/products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({ required: true }) cart: Product[] = []

  showHideSideMenu = signal<boolean>(true)
  toogleShowSideMenu() {
    this.showHideSideMenu.update(prevState => !prevState)
  }
}
