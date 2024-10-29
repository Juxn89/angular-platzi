import { Component, inject, OnInit } from '@angular/core';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  showMenu = false
  counter = 0
  private storeService = inject(StoreService)

  ngOnInit() {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length
    })
  }

  toogleMenu() {
    this.showMenu = !this.showMenu
  }
}
