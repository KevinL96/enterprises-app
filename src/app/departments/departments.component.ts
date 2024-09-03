// src/app/departments/departments.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Department } from '../models/department.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, TableModule],
})
export class DepartmentsComponent implements OnInit {
  @Input() enterpriseId!: number;
  departments: Department[] = [];
displayedColumns: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getDepartmentsByEnterpriseId(this.enterpriseId)
      .subscribe((data) => {
        this.departments = data;
      });
  }
}
