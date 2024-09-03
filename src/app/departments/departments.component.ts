// src/app/departments/departments.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  @Input() enterpriseId!: number;
  departments: Department[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDepartmentsByEnterpriseId(this.enterpriseId).subscribe(data => {
      this.departments = data;
    });
  }
}
