import { Vendorservice } from './vendorservice';
import { TestBed } from '@angular/core/testing';

describe('Vendorservice', () => {
  let service: Vendorservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vendorservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});