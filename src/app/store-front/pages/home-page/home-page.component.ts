import {Component, inject} from '@angular/core';
import {ProductCardComponent} from "@store-front/components/product-card/product-card.component";
import {ProductService} from "@products/services/products.service";
import {rxResource} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        ProductCardComponent
    ],
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  productsService = inject(ProductService);

  productsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.productsService.getProducts({});
    }
  })
}
