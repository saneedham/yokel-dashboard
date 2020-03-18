import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'InventoryTableComponent',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
