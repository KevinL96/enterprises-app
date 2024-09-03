// src/app/enterprises/enterprises.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Enterprise } from '../models/enterprise.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css'],
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    TableModule],
  
})
export class EnterprisesComponent implements OnInit {
  enterprises: Enterprise[] = [];
  dataSource: Enterprise[] = [];
  displayedColumns: string[] = ['id', 'name' , 'actions'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getEnterprises().subscribe((data) => {
      this.enterprises = data;
      this.dataSource = data;
    });
  }
}
