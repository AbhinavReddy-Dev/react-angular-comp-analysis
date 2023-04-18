import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, ProductApiRes } from 'src/app/types/ecommerce';
import { Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcommerceComponent implements OnInit {
  data$!: Observable<ProductApiRes>;
  products$!: Observable<Product[]>;
  constructor(
    private router: Router,
    private ecommerceService: EcommerceService
  ) {}

  handleProductClick(product: Product) {
    // console.log(product);
    this.router.navigate(['ecommerce', product.id]);
  }
  ngOnInit(): void {
    // this.data$ = this.http.get<ProductApiRes>('https://dummyjson.com/products');
    // this.products$ = this.data$.pipe(map((data) => data.products));
    this.products$ = this.ecommerceService.getProducts();
  }
}
