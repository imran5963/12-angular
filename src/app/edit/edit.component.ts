import { Component } from '@angular/core';
import { DataService } from '../data.service';
import {data } from '../data'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  updateData = {
    id:"",
    name:"",
    email:"",
    number:""
  };

//   onEdit(data:data){
// return this.updateData<data>=data;
//   }

}
