import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'mdbootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { OnCreate } from './onCreate.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';


@NgModule({
  declarations: [
    AppComponent,
    OnCreate,
    InventoryTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
