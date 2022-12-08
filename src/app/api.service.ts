import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addstudent=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",datatosend)
  }
  viewstudent =()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  readValues=(datatosend:any)=>

  {

    return this.http.post("http://localhost:8080/search",datatosend)

  }
  deleteStudent=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/delete",datatosend)
  }


}
