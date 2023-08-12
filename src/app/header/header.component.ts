import { Component } from '@angular/core';
import {FormComponent} from "../form/form.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private obj:NgbModal){}
    openModal(){
      const modalRef=this.obj.open(FormComponent,{centered:true});
    }
  }


