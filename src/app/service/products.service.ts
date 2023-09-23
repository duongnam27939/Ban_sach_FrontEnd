import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICategory } from '../interface/category';
import { IProducts } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API = 'http://localhost:8080/api';
  
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<IProducts[]>{
    const url = `${this.API}/products`;
    return this.http.get<IProducts[]>(url)
  }

  getProduct(_id: string | null): Observable<IProducts> {
    const url = `${this.API}/products/${_id}`;
    return this.http.get<IProducts>(url)
  }

  addProduct(products: IProducts):Observable<IProducts>{
    const url = `${this.API}/products`;
    return this.http.post<IProducts>(url,products)
  }

  getCategory(): Observable<ICategory> {
    const url = `${this.API}/category`;
    return this.http.get<ICategory>(url)
  }

  updateProduct(products: IProducts): Observable<IProducts> {
    const url = `${this.API}/products/${products._id}`;
    return this.http.put<IProducts>(url, products);
  }

  deleteProduct(id: string | null): Observable<IProducts> {
    const url = `${this.API}/products/${id}`;
    return this.http.delete<IProducts>(url)
  }
}
