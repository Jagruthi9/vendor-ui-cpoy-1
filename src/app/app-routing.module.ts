import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';


const routes: Routes = [{ path: '', redirectTo: 'vendor', pathMatch: 'full' },
{ path: 'vendors', component: VendorListComponent },
{ path: 'add', component: CreateVendorComponent },
{ path: 'update/:id', component: UpdateVendorComponent },
{ path: 'details/:id', component:VendorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
