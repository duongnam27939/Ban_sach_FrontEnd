import { Component } from '@angular/core';
import { User } from 'src/app/interface/auth';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  user!: User[];
  constructor(private userService: UserService) {
    this.userService.geAlltUser().subscribe((response: any) => {
      this.user = response.data
      console.log(response.data);
    })
  }
  removeId(_id:any){
    if (confirm('Bạn có muốn xóa đi Tài khoản này không!')) {
      this.userService.removeUser(_id).subscribe((data)=>{
        this.user = this.user.filter(item =>item._id !== _id)
        setTimeout(()=>{
          alert('Xóa Tài khoản thành công!')
        },1000)
      })
    }
  }
}
