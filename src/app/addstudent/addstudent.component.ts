import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  
  name=""
  admno=""
  rollno=""
  college=""
  constructor(private api:ApiService){}
  readvalue=()=>
  {
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
    console.log(data)
    this.api.addstudent(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Course added successfully")

          this.name=""

          this.admno=""

          this.rollno=""

          this.college=""
      }else{

          alert("Something went wrong")

        }
      }
    )
  }
}
