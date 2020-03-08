import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:'Login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: AdminDashboardComponent
  },
  {
    path:'',
    redirectTo: 'Login',
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
