// src/app/employees/employees.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employee } from '../models/employee.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, TableModule],
})
export class EmployeesComponent implements OnInit {
  @Input() departmentId!: number;
  employees: Employee[] = [];
  dataSource: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getEmployeesByDepartmentId(this.departmentId).subscribe(data => {
      this.employees = data;
      this.dataSource = data;
    });
  }
}