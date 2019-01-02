import { Injectable, ErrorHandler } from '@angular/core';
// import {Observable} from 'rxjs/observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeI } from './EmployeeI';
import { Observable } from 'rxjs';
// import 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  private _url = '/assets/employeeData.json';

  getEmployee() : Observable<EmployeeI[]>{
    // For simple Http request
    // return [
    //   {"name" : "sarthak" , "id" : "3"},
    //   {"name" : "sarthak" , "id" : "3"},
    //   {"name" : "sarthak" , "id" : "3"}
    // ];
    return this.http.get<EmployeeI[]>(this._url);
                              // .catch(this.ErrorHandler());
    //Http Request
  }
  // errorHandler(error : HttpErrorResponse){
  //   return this.observable.throw(error.message || "Server ERROR!")
  // }

}
