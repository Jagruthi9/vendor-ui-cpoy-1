import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { Vendorservice } from '../service/vendorservice';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {

//   vendor: Vendor = new Vendor();
//   submitted = false;
  

//   constructor(private vendorService: Vendorservice,
//     private router: Router) { }

//   ngOnInit() {
//   }

//   newVendor(): void {
//     this.submitted = false;
//     this.vendor = new Vendor();
//   }

//   save() {
//     this.vendorService.createVendor(this.vendor)
//       .subscribe(data => console.log(data), error => console.log(error));
//     this.vendor = new Vendor();
//     this.gotoList();
//   }

//   onSubmit() {
//     this.submitted = true;
//     this.save();    
//   }

//   gotoList() {
//     this.router.navigate(['/vendors']);
//   }
// }

vendor: Vendor;
  msg:string;
  isNew:boolean;
  

  constructor(private actRoute: ActivatedRoute,
    private router: Router,
    private vendorService: Vendorservice) {
    
   }

  ngOnInit() {
    let id = this.actRoute.snapshot.params.id;
    if(id){
      this.isNew = false;
      this.vendorService.getVendor(id).subscribe(
        (data)=>{
          this.vendor=data;
        }
      );
    }else{
      this.isNew = true;
      this.vendor = {
        "vendorId":null,
        "name":"",
        "city":"",
        "emailId":"",
        "mobileNo":"",
        "products":[]
      }
    }
  }
  save(){
    let ob: Observable<Vendor>;
    if(this.isNew){
      ob = this.vendorService.createVendor(this.vendor);
    }else{
      ob = this.vendorService.updateVendor(this.vendor);
    }
    
    ob.subscribe(
      (data)=>{
        this.router.navigateByUrl("/vendors");
      },
      (errResponse)=>{
        this.msg = errResponse.error;
      }
    );
  }
      
  }



