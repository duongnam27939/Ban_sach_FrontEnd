import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  user!: any

  loginForm = this.fb.group({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }
  get checkValidate() {
    return this.loginForm.controls
  }

  onHandleSubmit() {
    if (this.loginForm.valid) {
      const user: User = {
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || ''
      };
      this.auth.login(user).subscribe(
        (data: any) => {
          console.log(data.auth);

          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem('token', data.token);
          let token = localStorage.getItem('token');
          if (data.auth.role == "admin") {
            this.router.navigate(['/']);
          } else {
            this.router.navigate(['/'])
          }

        },

      );
    }
  }

}
