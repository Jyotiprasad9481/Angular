import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'laptop/:id', component: LaptopComponent },
  { path: 'laptop', component: LaptopComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
