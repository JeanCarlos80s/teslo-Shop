import {Component, computed, input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Product} from "@products/interfaces/product.interface";
import {SlicePipe} from "@angular/common";

@Component({
    selector: 'product-card',
    standalone: true,
    imports: [RouterLink, SlicePipe],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<Product>();
  imageUrl = computed(() => {
    return `http://localhost:3000/api/files/product/${this.product().images[0]}`
  })
}
