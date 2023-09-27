import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/auth';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  submitValue: boolean = false;
  user!: any;

  userForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    role: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private routers: Router
  ) {
    this.route.paramMap.subscribe(params => {
      const _id = (params.get('id'))
      this.userService.getByIduser(_id).subscribe((response: any) => {
        this.user = response.data;
        console.log(response.data.name);

        this.userForm.patchValue({
          name: response.data.name,
          email: response.data.email,
          role: response.data.role,
        })

      })
    })
  }

  onHandleSubmit(){
    this.submitValue = true;
    if (this.userForm.valid) {
      const user: User = {
        _id: this.user._id,
        name:this.userForm.value.name || '',
        email:this.userForm.value.email || '',
        role:this.userForm.value.role || ''
      }
      if (confirm('Bạn có muốn cập nhập lại tài khoản không!')) {
        this.userService.updateUser(user).subscribe(data=>{
          this.routers.navigate(['admin/user']);
          setTimeout(()=>{
            alert('Cập nhập sản phẩm thành công!')
          },1000)
        })
      }
    }
  }
}
