import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductsResponse} from "@products/interfaces/product.interface";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";

const baseUrl = environment.baseUrl;

interface IOptions {
  limit?: number;
  offset?: number;
  gender?: string;
}

@Injectable({providedIn: 'root'})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(options: IOptions): Observable<ProductsResponse> {
    const { limit = 6, offset = 0, gender = ''} = options;

    return this.http.get<ProductsResponse>(
      `${baseUrl}/products`, {
        params: {
          limit,
          offset,
          gender,
        }
      }
    ).pipe(
      tap((resp) => console.log(resp))
    );
  }
}
