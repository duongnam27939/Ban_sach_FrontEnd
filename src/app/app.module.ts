import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { LayoutUserComponent } from './Layout/layout-user/layout-user.component';
import { AboutComponent } from './pages/about/about.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    LayoutUserComponent,
    AboutComponent,
    HomepagesComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
