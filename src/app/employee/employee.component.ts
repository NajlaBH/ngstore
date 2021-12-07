import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Employee } from '../models/emplyee_model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeesList:Employee[]=[];

  //Declaration employee form
  formEmployee = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    website: new FormControl('',Validators.required)
  })

  //ADD success message
  successMsg="";

  constructor(private cruds:CrudService) { }

  ngOnInit(): void {
    this.employeesList=this.cruds.getEmployeesList();
  }

  //Get new index
  getNextId(employeesList:Employee[]){
    //return this.employees.length+1;
    return Math.max.apply(Math, this.employeesList.map(function(o) { return o.idEmployee; })) +1;
  }

  //Create new employee
  addEmployee(){
    const dataEmployee = this.formEmployee.value;

    console.log(dataEmployee);

    let emp:Employee = {  //idEmployee:this.cruds.getNextId(), 
                          idEmployee:this.getNextId(this.employeesList),
                          fullname:dataEmployee.fullname,
                          email:dataEmployee.email,
                          address:dataEmployee.address,
                          phone:dataEmployee.phone,
                          website:dataEmployee.website
                        };

    this.cruds.addEmployeeService(emp);

    this.successMsg='Employee added successfully';
    
  }

}
