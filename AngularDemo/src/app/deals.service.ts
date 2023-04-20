import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDeals } from './IDeals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
 baseurl:string="/assets/Data/deals.json"

 constructor(private http:HttpClient) { }

  getDeals():Observable<IDeals[]>
  {

return this.http.get<IDeals[]>(this.baseurl);
  

    // return this.http.get<IDeals[]>(this.baseurl);
  }
  createPost(){

  }
}
