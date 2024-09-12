import { Component, OnInit } from '@angular/core';
import { productService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data: any[] = [];
  constructor(private api: productService) {}
  ngOnInit(): void {
    this.api.getData().subscribe(
      (res) => {
        this.data = res;
      },
      (error) => {
        console.log('There was an Error', error);
      }
    );
  }
}
