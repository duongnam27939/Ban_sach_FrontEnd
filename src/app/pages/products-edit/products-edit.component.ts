import { Component } from '@angular/core';
import { IProducts } from 'src/app/interface/products';
import { FormBuilder,Validators } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent {
  category!: any;
  submitValue: boolean = false;
  products!:any;

  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    author: ['', [Validators.required]],
    description: ['', [Validators.required]],
    quantity: [0, [Validators.required]],
    images: ['', [Validators.required]],
    categoryId: ['', [Validators.required]],
    sale: [0, [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private routers: Router,
    private router:ActivatedRoute
  ) {
    this.productsService.getCategory().subscribe((response: any) => {
      this.category = response
    })

    this.router.paramMap.subscribe(params=>{
      const _id = (params.get("id"));
      this.productsService.getProduct(_id).subscribe((response:any)=>{
        this.products = response.products
        console.log(_id);
        console.log(response.products);

        this.categoryForm.patchValue({
          name:response.products.name,
          price:response.products.price,
          images:response.products.images,
          description:response.products.description,
          author:response.products.author,
          categoryId:response.products.categoryId,
          sale:response.products.sale,
          quantity:response.products.quantity
        })
        
      })
    })
    
  }

  onhandledSubmit() {
    this.submitValue = true
    if (this.categoryForm.valid) {
      const product: IProducts = {
        _id:this.products._id,
        name: this.categoryForm.value.name || '',
        price: this.categoryForm.value.price || 0,
        author: this.categoryForm.value.author || '',
        description: this.categoryForm.value.description || '',
        quantity: this.categoryForm.value.quantity || 0,
        images: this.categoryForm.value.images || '',
        sale: this.categoryForm.value.sale || 0,
        categoryId: this.categoryForm.value.categoryId || '',
      }
      console.log(product);     
      if (confirm('Bạn có chắc muốn cập nhập sản phẩm này không!')) {
        this.productsService.updateProduct(product).subscribe((data) => {
          this.routers.navigate(['admin/products'])
          setTimeout(() => {
            alert("Cập nhập sản phẩm thành công!")
          }, 2000);
        })
      }
    }
  }
}
