// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Enterprise } from '../models/enterprise.model'; 
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private enterprises: Enterprise[] = [
    { id: 1, name: 'Enterprise 1' },
    { id: 2, name: 'Enterprise 2' }
  ];

  private departments: Department[] = [
    { id: 1, name: 'Department 1', enterpriseId: 1 },
    { id: 2, name: 'Department 2', enterpriseId: 1 },
    { id: 3, name: 'Department 3', enterpriseId: 2 }
  ];

  private employees: Employee[] = [
    { id: 1, name: 'Employee 1', departmentId: 1 },
    { id: 2, name: 'Employee 2', departmentId: 1 },
    { id: 3, name: 'Employee 3', departmentId: 2 },
    { id: 4, name: 'Employee 4', departmentId: 3 }
  ];

  getEnterprises(): Observable<Enterprise[]> {
    return of(this.enterprises);
  }

  getDepartmentsByEnterpriseId(enterpriseId: number): Observable<Department[]> {
    return of(this.departments.filter(dept => dept.enterpriseId === enterpriseId));
  }

  getEmployeesByDepartmentId(departmentId: number): Observable<Employee[]> {
    return of(this.employees.filter(emp => emp.departmentId === departmentId));
  }
}
