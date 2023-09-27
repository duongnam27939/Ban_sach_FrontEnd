import { Component } from '@angular/core';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-homepages',
  templateUrl: './homepages.component.html',
  styleUrls: ['./homepages.component.scss']
})
export class HomepagesComponent {

  products!: IProducts[]
  constructor(private productsSevri: ProductsService){
    this.productsSevri.getAllProducts().subscribe(data=>{
      this.products = data
      console.log(data);
      
    })
  }
}
