import { Component } from '@angular/core';

@Component({
  selector: 'app-db2',
  standalone: false,
  
  templateUrl: './db2.component.html',
  styleUrl: './db2.component.css'
})
export class Db2Component {
  numbersMatriz4x4 = [2, 3];
  numbersMatriz8x8 = [4, 5, 6, 7, 8, 9, 10, 11];
}
