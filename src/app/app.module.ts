
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    InventoryTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
