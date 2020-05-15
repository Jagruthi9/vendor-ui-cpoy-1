import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorListComponent } from './vendor-list/vendor-list.component';

import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
// import { UpdateVendorComponent } from './update-vendor/update-vendor.component';


const routes: Routes = [{path: '', component: LoginComponent},
{path:'logout',component:LogoutComponent},
{ path: 'vendors', component: VendorListComponent },
{ path: 'add', component: CreateVendorComponent },
{ path: 'edit/:id', component: CreateVendorComponent},
{ path: 'details/:id', component:VendorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
