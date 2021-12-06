import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //total employees navbar
  employeesTotal:number=0;

  constructor(private cruds:CrudService) { }

  ngOnInit(): void {
    this.employeesTotal= this.cruds.getTotalEmployees();
  }
  
}
