import { Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  standalone: true
})
export class ListProductsComponent {
  itemName: string = 'Cool Gadget';
  itemImage: string = 'assets/product.png';
  count: number = 0;
  decrement() {
    if(this.count != 0) {
      this.count--;
    }
  }
  increment() {
    this.count++;
  } 
  reset() {
    this.count = 0;
  }

}
