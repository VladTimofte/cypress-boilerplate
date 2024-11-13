import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Item {
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  items: Item[] = [
    { name: 'Laptop', category: 'Electronics', price: 1500 },
    { name: 'Headphones', category: 'Electronics', price: 100 },
    { name: 'Coffee Maker', category: 'Home Appliances', price: 50 },
    { name: 'Smartphone', category: 'Electronics', price: 800 },
    { name: 'Desk Chair', category: 'Furniture', price: 200 },
    { name: 'Blender', category: 'Home Appliances', price: 70 },
    { name: 'Dining Table', category: 'Furniture', price: 400 },
    { name: 'Television', category: 'Electronics', price: 1200 },
    { name: 'Microwave', category: 'Home Appliances', price: 90 },
    { name: 'Bookshelf', category: 'Furniture', price: 150 },
    { name: 'Gaming Console', category: 'Electronics', price: 500 },
    { name: 'Air Purifier', category: 'Home Appliances', price: 130 },
    { name: 'Electric Kettle', category: 'Home Appliances', price: 30 },
    { name: 'Sofa', category: 'Furniture', price: 800 },
    { name: 'Smartwatch', category: 'Electronics', price: 250 },
    { name: 'Washing Machine', category: 'Home Appliances', price: 700 },
    { name: 'Refrigerator', category: 'Home Appliances', price: 1200 },
    { name: 'Office Desk', category: 'Furniture', price: 300 },
    { name: 'Tablet', category: 'Electronics', price: 450 },
    { name: 'Vacuum Cleaner', category: 'Home Appliances', price: 200 }
  ];

  filteredItems: Item[] = [...this.items];
  searchText: string = '';
  selectedCategory: string = 'All';
  priceRange: { min: number; max: number } = { min: 0, max: 2000 };
  categories: string[] = ['All', 'Electronics', 'Home Appliances', 'Furniture'];

  applyFilters() {
    this.filteredItems = this.items.filter(item => {
      const matchesSearchText = item.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || item.category === this.selectedCategory;
      const matchesPrice = item.price >= this.priceRange.min && item.price <= this.priceRange.max;
      return matchesSearchText && matchesCategory && matchesPrice;
    });
  }
}
