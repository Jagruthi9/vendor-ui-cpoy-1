// import { Component, OnInit } from '@angular/core';
// import { Vendor } from '../model/vendor';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Vendorservice } from '../service/vendorservice';

// @Component({
//   selector: 'app-update-vendor',
//   templateUrl: './update-vendor.component.html',
//   styleUrls: ['./update-vendor.component.css']
// })
// export class UpdateVendorComponent implements OnInit {

  // vendorId: number;
  // vendor: Vendor;

  // constructor(private route: ActivatedRoute,private router: Router,
  //   private vendorService: Vendorservice) { }

  // ngOnInit() {
  //   this.vendor= new Vendor();

  //   this.vendorId = this.route.snapshot.params['id'];
    
  //   this.vendorService.getVendor(this.vendorId)
  //     .subscribe(data => {
  //       console.log(data)
  //       this.vendor = data;
  //     }, error => console.log(error));
  // }

  // updateVendor() {
  //   this.vendorService.updateVendor(this.vendorId, this.vendor)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   this.vendor= new Vendor();
  //   this.gotoList();
  // }

  // onSubmit() {
  //   this.updateVendor();    
  // }

  // gotoList() {
  //   this.router.navigate(['/']);
  // }
// }
