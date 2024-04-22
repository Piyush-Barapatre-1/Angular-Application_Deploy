import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrl: './view-supplier.component.css'
})
export class ViewSupplierComponent {

  constructor(private ps:ProductService)
  { 

  }

  supplierData:Product[];

  ngOnInit(): void {
    this.ps.getAllProduct().subscribe(
        (data:Product[])=>
        {
          this.supplierData=data;
        }
    )
  }
}
