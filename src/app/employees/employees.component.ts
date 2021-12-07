import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Employee } from '../models/emplyee_model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeesList:Employee[]=[];
  constructor(public cruds:CrudService) { }

  ngOnInit(): void {
    this.employeesList=this.cruds.getEmployeesList();
  }

}
