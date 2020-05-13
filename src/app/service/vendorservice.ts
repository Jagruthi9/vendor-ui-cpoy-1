import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class Vendorservice {
  private baseUrl="http://localhost:5000/vendor-service/vendor";
  public username: String;
 public password: String;


    constructor(private http: HttpClient) { }
  
    getVendor(vendorId: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/get/${vendorId}`);

    }
  getProducts(vendorId: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${vendorId}`);
    }
    createVendor(user:Vendor): Observable<any> {
      return this.http.post(this.baseUrl+"/add",user);
    }
  
    updateVendor(vendorId: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/upvendor/${vendorId}`, value);
      }
  
    deleteVendor(vendorId:number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/delete/${vendorId}`, { responseType: 'text' });
    }
  
    getVendorsList(): Observable<any> {
      return this.http.get(this.baseUrl+"/getAll");
    }
}