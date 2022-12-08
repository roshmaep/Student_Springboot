import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent {
  constructor(private api:ApiService)
  {
    api.viewstudent().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}
