import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';
import { Product } from 'src/app/types/ecommerce';

@Component({
  selector: 'app-ecommerce-id',
  templateUrl: './ecommerce-id.component.html',
  styleUrls: ['./ecommerce-id.component.css'],
})
export class EcommerceIdComponent {
  id: number = 0;
  product!: Product;
  count: number = 0;
  imagenumber: number = 1;
  constructor(
    private route: ActivatedRoute,
    private ecommerceService: EcommerceService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') || '1');
    });
    this.ecommerceService.getProduct(this.id).subscribe((product) => {
      this.product = product;
    });
  }

  updateImageNumber() {
    this.imagenumber = Math.floor(
      Math.abs(this.count % this.product.images.length) + 1
    );
    console.log(this.imagenumber);
  }

  incrementCount() {
    this.count = this.count + 1;
    this.updateImageNumber();
  }

  decrementCount() {
    this.count = this.count - 1;
    this.updateImageNumber();
  }
}
