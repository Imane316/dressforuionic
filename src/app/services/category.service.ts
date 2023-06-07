import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8880';

  constructor(private http: HttpClient) { }

  getCategoryById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/${id}`);
  }
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  addCategory(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/category`, data);
  }

  updateCategory(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/category/${id}`, data);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/category/${id}`);
  }

  addDressToCategory(id: string, dressId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories/${id}/dresses/${dressId}`, {});
  }

  getDressIdsByCategoryId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/${id}/dresses`);
  }
}