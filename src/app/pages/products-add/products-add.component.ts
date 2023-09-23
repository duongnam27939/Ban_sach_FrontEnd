import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { ProductsService } from 'src/app/service/products.service';
import { IProducts } from 'src/app/interface/products';
import { ICategory } from 'src/app/interface/category';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent {

  category!: any;
  submitValue: boolean = false;

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
    private routers: Router
  ) {
    this.productsService.getCategory().subscribe((response: any) => {
      this.category = response
      console.log(response);

    })
  }

  onhandledSubmit() {
    this.submitValue = true
    if (this.categoryForm.valid) {
      const product: IProducts = {
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
      if (confirm('Bạn có chắc muốn thêm sản phẩm này không!')) {
        this.productsService.addProduct(product).subscribe((data) => {
          this.routers.navigate(['admin/products'])
          setTimeout(() => {
            alert("Thêm sản phẩm thành công!")
          }, 2000);
        })
      }
    }
  }
}
