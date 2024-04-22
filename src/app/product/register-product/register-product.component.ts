import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { Product } from '../../model/product';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.css'
})
export class RegisterProductComponent implements OnInit{

  constructor(private fb:FormBuilder, private ps:ProductService, private activateroute:ActivatedRoute)
  {

  }

  flag:boolean=false

  registerProduct:FormGroup

  ngOnInit(): void {
    this.registerProduct=this.fb.group(
      {
        id:[],
        productName:[],
        manufacturerName:[],
        availableQty:[],
        reorderLevel:[],
        color:[],
        details:[],
        supplier:this.registerProduct=this.fb.group(
          {
            supplierName:[],
            supplierCompanyName:[],
            supplierEmail:[],
            address:[],
            contactNo:[],
            city:[],
            state:[]
          }
        )
      }
    )
    this.patchData();
  }

  onSubmit()
  {
    if(this.flag)
    {
      this.ps.updateProduct(this.registerProduct.value).subscribe();
      alert("Product Update Successfully....")
      this.registerProduct.reset();
    }

    else{
    this.ps.registerProduct(this.registerProduct.value).subscribe();
    alert("Product Registered Successfully....")
    this.registerProduct.reset();
    }
  }

  patchData()
  {
    
    let id;
    this.activateroute.paramMap.subscribe(
      param=>
      {
       id= param.get('data')
      }
    )
    
    if(id!=null)
    {
    this.ps.getSingleProduct(id).subscribe(
      (data:Product)=>
      {
        this.registerProduct.patchValue(data);
        this.flag=true;
      }
    )
    }
  }
  

}
