import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';

const routes: Routes = [
  {path : "", redirectTo : "/employee-list", pathMatch : "full" },
  {path : "employee-list", component : EmployeeListComponent},
  {path : "employee-details" , component : EmployeeDetailsComponent},
  {path : "**", component : PageNotFoudComponent}
];
///route : obj :: contains url

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents =  [EmployeeDetailsComponent, EmployeeListComponent ];