import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  registerProduct(product:Product)
  {
    return this.http.post("http://localhost:3000/product",product);
  }

  getAllProduct()
  {
    return this.http.get("http://localhost:3000/product");
  }

  getSingleProduct(id:string)
  {
    return this.http.get("http://localhost:3000/product/"+id);
  }

  updateProduct(product:Product)
  {
    return this.http.put("http://localhost:3000/product/"+product.id,product)
  }

  deleteProduct(id:string)
  {
    return this.http.delete("http://localhost:3000/product/"+id)
  }
}
