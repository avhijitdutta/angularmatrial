import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  merchantId: number;
  merchantName: string;
  interest: any;
  offerDate: string;
  loanAmounRequested: number;
  lenderAcceptanceStatus: string;
  lenderApprovedAmount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {merchantId: 1, merchantName: 'Hydrogen', interest: 1.0079, offerDate: '12/12/12', 'loanAmounRequested': 1234,
  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 2, merchantName: 'Helium', interest: 4.0026, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 3, merchantName: 'Lithium', interest: 6.941, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 4, merchantName: 'Beryllium', interest: 9.0122, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 5, merchantName: 'Boron', interest: 10.811, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 6, merchantName: 'Carbon', interest: 12.0107, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 7, merchantName: 'Nitrogen', interest: 14.0067, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 8, merchantName: 'Oxygen', interest: 15.9994, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 9, merchantName: 'Fluorine', interest: 18.9984, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 10, merchantName: 'Neon', interest: 20.1797, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 6, merchantName: 'Carbon', interest: 12.0107, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 7, merchantName: 'Nitrogen', interest: 14.0067, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 8, merchantName: 'Oxygen', interest: 15.9994, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 9, merchantName: 'Fluorine', interest: 18.9984, offerDate: '12/12/12', 'loanAmounRequested': 1234,  lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
  {merchantId: 10, merchantName: 'Neon', interest: 20.1797, offerDate: '12/12/12', 'loanAmounRequested': 1234, lenderAcceptanceStatus : 'A', lenderApprovedAmount: 123456},
];




@Component({
  selector: 'app-lender-list',
  templateUrl: './lender-list.component.html',
  styleUrls: ['./lender-list.component.css']
})
export class LenderListComponent implements OnInit {

  displayedColumns: string[] = ['merchantId', 'merchantName', 'interest', 'offerDate', 'loanAmounRequested', 'lenderApprovedAmount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

  }

}
