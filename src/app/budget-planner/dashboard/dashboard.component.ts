import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  lastMonthsIncome=['January:$1000','February:$1500','March:$1200'];
  currentMonthIncome='$2000';
  constructor(public router:Router){}
  onIncome(){
    this.router.navigate(['/budget-planner/income']);
  }
}
