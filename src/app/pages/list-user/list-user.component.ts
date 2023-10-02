import { Component } from '@angular/core';
import { User } from 'src/app/interface/auth';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

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
      this.userService.removeUser(_id).subscribe((data)=>{
        this.user = this.user.filter(item =>item._id !== _id)
        Swal.fire({
          title: 'Xác nhận xóa',
          text: 'Bạn có chắc chắn muốn xóa tài khoản này ko?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Hủy',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xóa sản tài khoản thành công',
              text: 'Tài khoản đã được xóa thành công!',
              showConfirmButton: false,
              timer: 2000,
              iconHtml: '<i class="fas fa-check-circle"></i>'
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Hủy bỏ',
              'Dữ liệu không bị xóa.',
              'info'
            );
          }
        });
      })
  }
}
