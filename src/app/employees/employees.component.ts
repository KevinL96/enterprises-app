// src/app/employees/employees.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employee } from '../models/employee.model';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class EmployeesComponent implements OnInit {
  @Input() departmentId!: number;
  employees: Employee[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getEmployeesByDepartmentId(this.departmentId).subscribe(data => {
      this.employees = data;
    });
  }
}