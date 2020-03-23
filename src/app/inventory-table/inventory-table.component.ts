import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {

  product = {
    name: 'Black Pepper Sausages',
    cost: '3.50',
    stock: '3',
    value: '10.50',
    id: 'a2b3e4f5g2h1'
  };

  headings: Array<string>= [
    'Product name',
    'Unit cost (£)',
    'Stock level',
    'Stock value',
    'Actions'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
