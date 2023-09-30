import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products!: IProducts[];
  category!: any[];

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute){
    this.productsService.getAllProducts().subscribe((response:any)=>{
      this.products = response.products
      console.log(response.products);
    })
  }

  removeId(_id:any){
    if (confirm('Bạn có muốn xóa sản phẩm này ko!')) {
      this.productsService.deleteProduct(_id).subscribe((data)=>{
        this.products = this.products.filter(item=> item._id !== _id )
        setTimeout(()=>{
          alert('Xóa sản phẩm thành công!')
        },600)
      })
    }
  }
}
