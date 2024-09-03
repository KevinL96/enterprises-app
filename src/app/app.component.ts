// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { slideInAnimation } from './route-animations';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { ToolbarModule } from 'primeng/toolbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    EnterprisesComponent,
    DepartmentsComponent,
    EmployeesComponent,
    MatToolbarModule,
    ButtonModule,

    ToolbarModule
  ],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'enterprises-app';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
