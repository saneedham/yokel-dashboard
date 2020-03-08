import { Component, OnInit } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Products, document, InventoryService } from './inventory.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Logger } from '../logger';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss'],
  providers: [
    InventoryService
  ]
})
export class InventoryTableComponent implements OnInit {
  faMinus = faMinus;
  faPlus = faPlus;
  product_ids: Products;
  error: HttpErrorResponse;
  editField: string;
  value: number;
  product:document;
  
  
  constructor(private spService: InventoryService){}

  ngOnInit(){

    this.spService.get_products()
      .subscribe(
        (data: Products) => this.product_ids = {...data},
        error => this.error = error
      );

      if(this.error != null){
        console.error(this.error);
      }      
  }

  increaseStock(id: string){
    this.spService.get_product(id)
     .subscribe(
       (data: document) => this.product = {...data},
       error => this.error = error
     );

     if(this.error != null){
       console.error(this.error);
     }

    this.product.stock = this.product.stock + 1;
  }

  calculateValue(id: string, property: string, cost: number, vatrate: number, stock: number) {
    const value = (cost/100)*(100+vatrate)*stock;
    this.product_ids[id][property] = value;
  }

  changeValue(){
    // Placeholder for changing the value of a field in preparation for saving to database
  }
 /*
  calculateValue(id: number, property: string,cost: number, stock: number){
    const value = cost*stock;
    this.productList[id][property] = value;
  }

  decreaseStock(id: number, event: any){
    this.productList[id]['stock'] = this.productList[id]['stock'] - 1;
    this.changeValue(id, 'stock', event);
  }

  increaseStock(id: number, event:any){
    this.productList[id]['stock'] = this.productList[id]['stock'] + 1;
    this.changeValue(id,'stock', event);
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.productList[id][property] = editField;
    this.calculateValue(id, 'value',this.productList[id]['cost'],this.productList[id]['stock'])
  }

  remove(id: any) {
    this.awaitingProductList.push(this.productList[id]);
    this.productList.splice(id, 1);
  }

  add() {
    if (this.awaitingProductList.length > 0) {
      const person = this.awaitingProductList[0];
      this.productList.push(person);
      this.awaitingProductList.splice(0, 1);
    }
  }
 
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    this.calculateValue(id,'value',this.productList[id]['cost'], this.productList[id]['stock']);
  }
  */
}
