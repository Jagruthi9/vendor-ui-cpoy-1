import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
// import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { HttpInterceptorService } from './service/http-interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    CreateVendorComponent,
    VendorDetailsComponent,
    VendorListComponent,
    // UpdateVendorComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
