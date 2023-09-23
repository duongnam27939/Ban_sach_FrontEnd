import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { ICategory } from '../interface/category';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API = 'http://localhost:8080/api';
  // token = localStorage.getItem('token')
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     // Authorization: 'Bearer ' + this.token,
  //     Authorization: 'Bearer ' ,
  //   }),
  // }
  constructor(
    private http: HttpClient
  ) { }

  categoryAdd(category: ICategory): Observable<ICategory> {
    const url = `${this.API}/category`;
    return this.http.post<ICategory>(url, category)
  }

  categoryUpdate(category: ICategory): Observable<ICategory> {
    const url = `${this.API}/category/${category._id}`;
    return this.http.patch<ICategory>(url, category);
  }
  getCategory(id: string | null): Observable<ICategory> {
    const url = `${this.API}/category/${id}`
    return this.http.get<ICategory>(url)
  }

  getAllCategory(): Observable<ICategory[]> {
    const url = `${this.API}/category`
    return this.http.get<ICategory[]>(url)
  }

  deleteCategory(id: string | null): Observable<ICategory> {
    const url = `${this.API}/category/${id}`
    return this.http.delete<ICategory>(url)
  }
}
