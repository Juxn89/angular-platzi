import { Routes } from '@angular/router';

import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('@product/pages/list/list.component').then(m => m.ListComponent) },
      { path: 'about', loadComponent: () => import('@info/pages/about/about.component') },
      { path: 'product/:id', loadComponent: () => import('@product/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
