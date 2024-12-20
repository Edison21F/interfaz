import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db5',
  templateUrl: './db5.component.html',
  styleUrls: ['./db5.component.css']
})
export class Db5Component implements OnInit {
  products: any[] = [];
  images: any[] = [];
  responsiveOptions: any[] = [];

  constructor() {}

  ngOnInit() {
    this.products = [
      { id: 1, name: 'Producto 1', price: 100, status: 'INSTOCK' },
      { id: 2, name: 'Producto 2', price: 200, status: 'LOWSTOCK' },
      { id: 3, name: 'Producto 3', price: 300, status: 'OUTOFSTOCK' }
    ];

    this.images = [
      { source: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg', alt: 'Imagen 1', title: 'Título 1' },
      { source: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg', alt: 'Imagen 2', title: 'Título 2' },
      { source: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg', alt: 'Imagen 3', title: 'Título 3' }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
