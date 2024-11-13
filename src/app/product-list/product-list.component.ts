import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Faina 500g', price: 7.89 },
    { id: 2, name: 'Ciocolata 200g', price: 14.99 },
    { id: 3, name: 'Lapte 1L', price: 8.46 }
  ];

  cart = new Map<number, { name: string; price: number; quantity: number }>();

  addToCart(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      if (this.cart.has(productId)) {
        const cartItem = this.cart.get(productId)!;
        cartItem.quantity += 1;
        this.cart.set(productId, cartItem);
      } else {
        this.cart.set(productId, { name: product.name, price: product.price, quantity: 1 });
      }
    }
  }

  clearCart() {
    this.cart.clear();
  }

  getTotalPrice(): number {
    let total = 0;
    this.cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }
}
