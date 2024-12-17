import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db5',
  templateUrl: './db5.component.html',
  styleUrls: ['./db5.component.css']
})
export class Db5Component implements OnInit {
  // Productos definidos directamente como un arreglo de "any" (datos quemados)
  products: any[] = [];

  responsiveOptions: any[] = [];

  constructor() {}

  ngOnInit() {
    // Datos "quemados" asignados directamente
    this.products = [
      { id: 1, name: 'Producto 1', price: 100, status: 'INSTOCK' },
      { id: 2, name: 'Producto 2', price: 200, status: 'LOWSTOCK' },
      { id: 3, name: 'Producto 3', price: 300, status: 'OUTOFSTOCK' }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
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

  getSeverity(status: string) {
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
