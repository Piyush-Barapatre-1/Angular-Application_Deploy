import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit{

  constructor(private ps:ProductService, private router:Router)
  { 

  }

  productData:Product[];

  ngOnInit(): void {
    this.ps.getAllProduct().subscribe(
        (data:Product[])=>
        {
          this.productData=data;
        }
    )
  }

  onEdit(id:string)
  {
    this.router.navigateByUrl('/Product/add/'+id)
  }

  onDelete(id:string)
  {
    this.ps.deleteProduct(id).subscribe();
    window.location.reload();
  }

}
