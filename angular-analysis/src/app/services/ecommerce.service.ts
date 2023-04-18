import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay, take } from 'rxjs';
import { Product, ProductApiRes } from '../types/ecommerce';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  data$!: Observable<ProductApiRes>;
  products$!: Observable<Product[]>;
  constructor(private http: HttpClient) {
    // this is a hack to make sure that the data is only fetched once
    if (!this.data$) {
      this.data$ = this.http.get<ProductApiRes>(
        'https://dummyjson.com/products'
      );
      this.products$ = this.data$.pipe(
        shareReplay(1),
        map((data) => {
          return data.products;
        })
      );
    }
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProduct(id: number) {
    return this.products$?.pipe(
      map((products) => products.filter((product) => product.id === id)[0])
    );
  }
}
