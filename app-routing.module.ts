import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { PageNavigateComponent } from './modules/page-navigate/page-navigate.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Login',
  loadChildren: ()=>import('./modules/login/login.module').then(m=>m.LoginModule)},
  {path:'',component:PageNavigateComponent},
  {path:'Product',
loadChildren:()=>import('./modules/product/product.module').then(m=>m.ProductModule)},
  //{ path: '', redirectTo: 'page-navigate', pathMatch: 'full' },
   {path:'AllProducts',
   loadChildren:()=>import('./modules/all-products/all-products.module').then(m=>m.AllProductsModule)},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
