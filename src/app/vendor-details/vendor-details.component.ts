import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from '../model/vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendorservice } from '../service/vendorservice';
import { Product } from '../model/product';
@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
// @Input()
 
//   public vendor: Vendor;
//   vendorId: number;

//   constructor(private route: ActivatedRoute,private router: Router,
//     private vendorService: Vendorservice) { }

//   ngOnInit() {
//     this.vendor = new Vendor();

//     this.vendorId= this.route.snapshot.params['id'];
    
//     this.vendorService.getProducts(this.vendorId)
//       .subscribe(data => {
//         console.log(data)
//         this.vendor= data;
//       }, error => console.log(error));
//   }

//   list(){
//     this.router.navigate(['vendors']);
//   }
// }
@Input()
  public vendor: Vendor;
  
  constructor() { }

  ngOnInit() {
  }

}