import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // getAllTasks() {
  //   throw new Error('Method not implemented.');
  // }
  //baseUrL="https://localhost:44330/";

  constructor(private http:HttpClient) { }

  // getAllTasks(){
  //   return  this.http.get(this.baseUrL+'api/task/findall')
  // }
  getAllProducts(){
    return  this.http.get('https://localhost:44344/api/Product/GetAll')
  }
}
