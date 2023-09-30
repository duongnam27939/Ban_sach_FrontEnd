import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  submitValue: boolean = false;
  category!: ICategory;

  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder,
    private cate: CategoryService,
    private routers: Router) { }

  onhandledSubmit() {
    this.submitValue = true
    if (this.categoryForm.valid) {
      const category: ICategory = {
        name: this.categoryForm.value.name || ''
      }
      if (confirm('Bạn có muốn thêm danh mục này ko!')) {
        this.cate.categoryAdd(category).subscribe((category) => {
          this.routers.navigate(['admin/category'])
          setTimeout(() => {
            alert('Thêm danh mục thành công!')
          }, 600);
        })
      }
    }
  }

}
