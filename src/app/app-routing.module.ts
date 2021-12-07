import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { UpdatemployeeComponent } from './updatemployee/updatemployee.component';

const routes: Routes = [
  {path:'', component: EmployeesComponent},
  {path:'add', component: EmployeeComponent},
  {path:'update', component: UpdatemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
