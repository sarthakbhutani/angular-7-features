import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule , RoutingComponents} from './app-routing.module'; //imports for ROUTING IN APP
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule}  from '@angular/common/http';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
// import {Obervable} from 'rxjs/Obervable';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RoutingComponents,
    PageNotFoudComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // Obervable
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
