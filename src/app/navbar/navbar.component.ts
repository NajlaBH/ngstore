import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Employee } from '../models/emplyee_model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //total employees navbar

  employeesList:Employee[]=[];


  constructor(public cruds:CrudService) { }

  ngOnInit(): void {
    this.employeesList=this.cruds.employees;

  }
  
}
