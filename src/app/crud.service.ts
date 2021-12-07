import { Injectable } from '@angular/core';
import { Employee } from './models/emplyee_model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //Get Total of employees send to navbar
  totalEmployees:number=0;
  listOfEmployees:Employee[]=[];

  //Declaration & initialization
  employees:Employee[]=[
    {idEmployee:0,fullname:"ABC",email:"abc@gmail.com",address:"abcaddress",phone:"000000000",website:"abcwebsite.com"},
    {idEmployee:1,fullname:"DEF",email:"def@gmail.com",address:"defaddress",phone:"100000000",website:"defwebsite.com"},
    {idEmployee:2,fullname:"GHK",email:"ghk@gmail.com",address:"ghkaddress",phone:"200000000",website:"ghkwebsite.com"},
    {idEmployee:3,fullname:"LMN",email:"lmn@gmail.com",address:"lmnaddress",phone:"300000000",website:"lmnwebsite.com"},
    {idEmployee:4,fullname:"OPQ",email:"opk@gmail.com",address:"opkaddress",phone:"400000000",website:"opqwebsite.com"},
  ];

  //employees:Employee[]=[];


  constructor() { }

  //Get list of employees
  getEmployeesList(){
    return this.listOfEmployees=this.employees;
  }


  //Get Total of employees send to navbar
  getTotalEmployees(){
    return this.totalEmployees=this.employees.length;
  }
  

  //Delete employee by index
  deleteContact(key: number) {
    this.employees.forEach((value,index)=>{
        if(value.idEmployee==key) 
	        this.employees.splice(index,1);
          console.log("index deleted:", index);
          this.getEmployeesList()
          this.getTotalEmployees()
        });
  }


  //add employee to the list
  addEmployeeService(dataEmployee:Employee){
    this.employees.push(dataEmployee);
  }
}
