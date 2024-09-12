import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from 'src/app/service/product.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent implements OnInit {
  product: any;
  productid: number | null = null;

  constructor(
    private activate: ActivatedRoute,
    private service: productService
  ) {}

  ngOnInit(): void {
    //___________This approach utilizes direct method invocations without using Observables___________
    //In this approach ngOnInit is executed during initialization. If navigation occurs within the same page, resulting in a change in route parameters, the parameters will be updated, but the content will remain unchanged.
    // const id = this.activate.snapshot.paramMap.get('id');
    // this.productid = id ? +id : null;
    // this.productService.getData().subscribe(
    //   (data: any[]) => {
    //     this.product = data.find((x: any) => x.id === this.productid);
    //     if (!this.product) {
    //       console.error('Product not found');
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching product data', error);
    //   }
    // );

    //_______________________________________________________________________________________________

    //___________This approach utilizes direct method invocations with using Observables___________

    this.activate.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.productid = id ? +id : null;
      this.service.getData().subscribe(
        (data: any[]) => {
          this.product = data.find((x: any) => x.id === this.productid);
          if (!this.product) {
            console.error('Product not found');
          }
        },
        (error: any) => {
          console.error('Error fetching product data', error);
        }
      );
    });

    //____________________________________________________________________________________________
  }

  goBack(): void {
    this.service.goBack();
  }
}
