import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService, private route:Router){}

  admno=""

  readValues:any = []

  readValue=()=>

  {

    let data:any={

    "admno":this.admno}

    console.log(data)

    this.api.readValues(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {

          alert("invalide patinet id")

         

        } else {

          this.readValues = response

        }

      }

    )

  }
  deleteBtnclick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteStudent(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("succesfully deleted")
          this.route.navigate(['/view'])
        }
        else{
          alert("invalid input")
        }
      }
    )
  }
}
