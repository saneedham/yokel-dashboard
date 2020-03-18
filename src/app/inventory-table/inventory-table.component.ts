import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventoryTable',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {

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
