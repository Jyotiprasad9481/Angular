import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { LaptopComponent } from './laptop/laptop.component';
import { HttpClientModule } from '@angular/common/http';
import { productService } from '../service/product.service';

@NgModule({
  declarations: [
    LaptopComponent
  ],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule],
  providers:[productService]
})
export class ProductsModule {}
