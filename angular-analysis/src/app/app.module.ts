import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { EcommerceIdComponent } from './pages/ecommerce-id/ecommerce-id.component';
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceService } from './services/ecommerce.service';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    EcommerceIdComponent,
    IndexComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EcommerceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
