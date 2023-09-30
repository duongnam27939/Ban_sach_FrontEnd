import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { LayoutUserComponent } from './Layout/layout-user/layout-user.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { ProductsAddComponent } from './pages/products-add/products-add.component';
import { ProductsEditComponent } from './pages/products-edit/products-edit.component';
import { ProductsComponent } from './pages/products/products.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { PagesDetailComponent } from './pages/pages-detail/pages-detail.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    LayoutUserComponent,
    HomepagesComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsComponent,
    ListUserComponent,
    UserEditComponent,
    PagesDetailComponent,
    CategoryDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
