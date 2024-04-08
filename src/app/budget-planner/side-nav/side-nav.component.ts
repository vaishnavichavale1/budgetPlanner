import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isSlideOut=true;
  constructor(private router:Router){}
  toggleSlideOut():void{
    this.isSlideOut=!this.isSlideOut;
  }
  OnDash(){
    this.router.navigate(['/budget-planer/dashboard']);
  }
  OnProfile(){
    this.router.navigate(['/budget-planer/profile']);
  }
  OnHistory(){
    this.router.navigate(['/budget-planer/history']);
  }
  OnLogout(){
    this.router.navigate(['/budget-planer/login']);
  }

}
