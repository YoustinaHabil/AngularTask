import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';
import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { groupBy } from 'rxjs';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
 deals:any=[];
 deal:any=[]
term: any;



  constructor(private dealsService:DealsService){}

  ngOnInit(): void {
  this.dealsService.getDeals().subscribe({
   
    next:data=>this.deals=data,
  })

  }
  drop(event: CdkDragDrop<string[]>){
     console.log ('from +'+ event.previousContainer.id + 'to :' +event.container.id);
    if(event.previousContainer===event.container){

      moveItemInArray(event.container.data,
        event.previousIndex,
         event.currentIndex);
      
    
    }else{
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,event.currentIndex);
    }
  }



evenPredicate(item:CdkDrag<string>){
  return item.data=="Leanne";
}

}