import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Employee } from '../models/emplyee_model';


@Component({
  selector: 'app-updatemployee',
  templateUrl: './updatemployee.component.html',
  styleUrls: ['./updatemployee.component.css']
})
export class UpdatemployeeComponent implements OnInit {
  
  
  successUpMsg:string="";


  constructor(private cruds:CrudService) { }

  employeesList:Employee[]=this.cruds.employees;


  upidx:number=this.cruds.indexToUpdate;
  fullname:string=this.employeesList[this.upidx].fullname;
  email:string=this.employeesList[this.upidx].email;
  address:string=this.employeesList[this.upidx].address;
  phone:string=this.employeesList[this.upidx].phone;
  website:string=this.employeesList[this.upidx].website;
  
  //Declaration employee form
  formUpEmployee = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    website: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    this.employeesList=this.cruds.getEmployeesList();
    
  }
  //Update employee
  updateEmployee(){
    this.cruds.employees[this.upidx]={idEmployee: this.upidx,fullname:this.fullname, email:this.email, address:this.address,phone:this.phone, website:this.website};
    console.log("Update employee " + this.upidx + " from component here...");
    this.successUpMsg="Employee n°" + this.upidx + "was successfully updated."
    this.cruds.indexToUpdate=0;
  }
}
