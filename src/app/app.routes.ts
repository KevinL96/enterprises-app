// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
  { path: '', component: EnterprisesComponent, data: { animation: 'EnterprisesPage' } },
  { path: 'enterprises', component: EnterprisesComponent, data: { animation: 'EnterprisesPage' } },
  { path: 'departments', component: DepartmentsComponent, data: { animation: 'DepartmentsPage' } },
  { path: 'employees', component: EmployeesComponent, data: { animation: 'EmployeesPage' } },
];