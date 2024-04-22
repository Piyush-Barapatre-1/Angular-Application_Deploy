import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';


@NgModule({
  declarations: [
    RegisterProductComponent,
    ViewProductComponent,
    ViewSupplierComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
