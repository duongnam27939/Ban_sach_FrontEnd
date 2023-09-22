import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutUserComponent } from './Layout/layout-user/layout-user.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';


const routes: Routes = [
  {
    path: '', component: LayoutUserComponent, children: [
      { path: '', component: HomepagesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'cart', component: CartComponent }

    ]
  },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: 'category', component: CategoryComponent },
      { path: 'category/add', component: CategoryAddComponent },
      { path: 'category/:id/edit', component: CategoryEditComponent }
    ]
  },
  { path: 'sigup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
