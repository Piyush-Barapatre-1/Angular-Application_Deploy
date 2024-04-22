import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';

const routes: Routes = [
  {
    path:'',redirectTo:'register', pathMatch:'full'
  },
  {
    path:'register', component:RegisterProductComponent
  },
  {
    path:'viewprod', component:ViewProductComponent
  },
  {
    path:'viewsuppl', component:ViewSupplierComponent
  },
  {
    path:'add/:data', component:RegisterProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
