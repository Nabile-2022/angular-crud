import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService
{
  endpoint = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  add(product: Product): Observable<Product> { return this.http.post<Product>(this.endpoint, product); }

  list(): Observable<Product[]> { return this.http.get<Product[]>(this.endpoint); }

  get(id: number): Observable<Product> { return this.http.get<Product>(`${this.endpoint}/${id}`); }

  edit(product: Product): Observable<Product> { return this.http.put<Product>(`${this.endpoint}/${product.id}`, product); }

  delete(id: number) { return this.http.delete<Product>(`${this.endpoint}/${id}`); }
}
