import { Component, OnInit } from '@angular/core';
import { DealsComponent } from './deals/deals.component';
import { DealsService } from './deals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'AngularDemo';
  // DealsList:{id: number,
  // first_name: string,
  // last_name: string,
  // email: string,
  // phone: string,
  // company: string,
  // status: string,
  // date: Date,
  // probability_status: string,
  // state: string}[]=Deals;
  // deals:any=[];
  // constructor(private dealsService:DealsService){}
  // ngOnInit(): void {
  //   this.deals=this.dealsService.getDeals()
}

