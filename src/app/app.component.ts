// src/app/app.component.ts
import { Component } from '@angular/core';
import { EnterprisesComponent } from './enterprises/enterprises.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports:[EnterprisesComponent]
})
export class AppComponent {
  title = 'enterprises-app';
}

