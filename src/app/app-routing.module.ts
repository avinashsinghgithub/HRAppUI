import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Employees/employees.component';
import { JobsComponent } from './Jobs/jobs.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'jobs', component: JobsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }