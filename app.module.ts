import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './modules/all-products/all-products.component';
import { GetProductByIdComponent } from './modules/get-product-by-id/get-product-by-id.component';
import { GetProductByNameComponent } from './modules/get-product-by-name/get-product-by-name.component';
import { GetProductByRangeComponent } from './modules/get-product-by-range/get-product-by-range.component';

import { PageNavigateComponent } from './modules/page-navigate/page-navigate.component';




@NgModule({
  declarations: [
    AppComponent,
    ForbiddenComponent,
    HeaderComponent,
    FooterComponent,
     AllProductsComponent,
    GetProductByIdComponent,
    GetProductByNameComponent,
    GetProductByRangeComponent,
    PageNavigateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
