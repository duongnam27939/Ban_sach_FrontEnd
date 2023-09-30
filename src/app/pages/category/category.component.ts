import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categorys!: ICategory[];


  constructor(private category: CategoryService,
    private route: ActivatedRoute,
    private routers: Router) {
    this.category.getAllCategory().subscribe((response: any) => {
      this.categorys = response.data
      console.log(response.data);
      
    })
  }

  removeId(_id:any){
    if (confirm('Bạn có chắc muốn xóa danh mục này ko!')) {
      this.category.deleteCategory(_id).subscribe((data)=>{
        this.categorys = this.categorys.filter(item=>item._id !== _id)
        setTimeout(()=>{
          alert('Xóa Danh mục thành công')
        },600)
      })
    }
    
  }

  
}
