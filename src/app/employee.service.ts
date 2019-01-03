import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeI } from './EmployeeI';

// import {Observable} from 'rxjs/Observable';
// import { Observable, observable } from 'rxjs';
// import 'rxjs';
// import 'rxjs/add/operator/catch'; 
// import 'rxjs/add/observable/throw';
// import {Observable} from 'rxjs/Rx'; //solved issue for CATCH and throw operators


import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    return this.http.get<EmployeeI[]>(this._url)
                              // .catch(this.errorHandler);
                              .pipe(catchError(this.errorHandler));
    //Http Request
  }
  errorHandler(error : HttpErrorResponse){
    return Observable.throw(error.message || "Server ERROR!");
  }

}
