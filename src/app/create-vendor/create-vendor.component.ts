import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { Vendorservice } from '../service/vendorservice';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {

  vendor: Vendor = new Vendor();
  submitted = false;
  

  constructor(private vendorService: Vendorservice,
    private router: Router) { }

  ngOnInit() {
  }

  newVendor(): void {
    this.submitted = false;
    this.vendor = new Vendor();
  }

  save() {
    this.vendorService.createVendor(this.vendor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vendor = new Vendor();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/vendors']);
  }
}