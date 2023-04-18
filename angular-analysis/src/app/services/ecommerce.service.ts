import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, take } from 'rxjs';
import { Product, ProductApiRes } from '../types/ecommerce';

@Injectable()
export class EcommerceService {
  data$!: Observable<ProductApiRes>;
  products$!: Observable<Product[]>;
  constructor(private http: HttpClient) {
    console.log('getProducts called');
    this.data$ = this.http.get<ProductApiRes>('https://dummyjson.com/products');
    this.products$ = this.data$.pipe(
      take(1),
      map((data) => data.products)
    );
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProduct(id: number) {
    console.log(id);
    // filter the products array and return the product with the id

    return this.products$?.pipe(
      map((products) => products.filter((product) => product.id === id)[0])
    );
  }
}
