import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  constructor(private router:Router,private activedRoute:ActivatedRoute){}
  
  gotoDeals(){
this.router.navigate(['deals'],{relativeTo:this.activedRoute})
  }
  gotoActivities(){
    this.router.navigate(['activities'],{relativeTo:this.activedRoute})

  }
  gotoStatistics(){
    this.router.navigate(['statistics'],{relativeTo:this.activedRoute})

  }
}
