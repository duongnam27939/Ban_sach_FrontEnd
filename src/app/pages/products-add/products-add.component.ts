import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { ProductsService } from 'src/app/service/products.service';
import { IProducts } from 'src/app/interface/products';
import Swal from 'sweetalert2';

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
    sale: [0, [Validators.required]],
    tags:['',[Validators.required]],
    discount:[0, [Validators.required]],
    status:['',[Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private routers: Router
  ) {
    this.productsService.getCategory().subscribe((response: any) => {
      this.category = response.data
      console.log(response.data);

    })
  }

  onSelectImage(event: any) {
    this.files.push(...event.addedFiles);
    const file_data = this.files[0]
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'upload');
    data.append('cloud_name', 'doa7mkkpq');
    this.productsService.uploadImage(data,
    ).subscribe(response => {
      this.url.push(response.secure_url)
      console.log(this.url);
    }
    )
  }

  files: any[] = [];
  url: any = []
  onRemovem(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);

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
        tags:this.categoryForm.value.tags || '',
        discount: this.categoryForm.value.discount || 0,
        status:this.categoryForm.value.status || '',
        categoryId: this.categoryForm.value.categoryId || '',
        
      }
      console.log(product);     
        this.productsService.addProduct(product).subscribe((data) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'thêm sản phẩm thành công!',
            text: 'Sản phẩm đã được thêm thành công!',
            showConfirmButton: false,
            iconHtml: '<i class="fas fa-check-circle"></i>',
            timer: 2000
          })
          this.routers.navigate(['admin/products'])
        }, (error) => {
          alert("Thêm không thành công")
        
        })
      
    }
  }
}
