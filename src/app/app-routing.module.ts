import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent,
     children:[
      {
          path:'registerproduct', loadChildren:()=>import('./product/product.module').then(mod=>mod.ProductModule)
      },
      {
        path:'viewprodModule', loadChildren:()=>import('./product/product.module').then(file=>file.ProductModule)
      }
    ]
  },
  {
    path:'viewprodModule', loadChildren:()=>import('./product/product.module').then(file=>file.ProductModule)
  },
  {
    path:'viewsuppModule', loadChildren:()=>import('./product/product.module').then(file=>file.ProductModule)
  },
  {
    path:'Product', loadChildren:()=>import('./product/product.module').then(file=>file.ProductModule)
  },
  {
    path:'home/:data', component:HomeComponent
  }
  
];

ProductModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
