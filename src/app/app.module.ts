import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateVendorComponent,
    VendorDetailsComponent,
    VendorListComponent,
    UpdateVendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
