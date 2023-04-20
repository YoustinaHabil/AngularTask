import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelegatesComponent } from './delegates/delegates.component';
import { ExhabitorsComponent } from './exhabitors/exhabitors.component';
import { SalesComponent } from './sales/sales.component';
import { SettingsComponent } from './settings/settings.component';
import { ProgramComponent } from './program/program.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DealsComponent } from './deals/deals.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path:'',redirectTo:'/sales',pathMatch:'full'},
  {path:'delegates', component:DelegatesComponent},
  {path:'exhabitors',component:ExhabitorsComponent},
  {path:'sales',
  component:SalesComponent,
  children:[
    {path:'deals',component:DealsComponent},
    {path:'activities',component:ActivitiesComponent},
    {path:'statistics',component:StatisticsComponent}
  ]
},
  {path:'settings',component:SettingsComponent},
  {path:'program',component:ProgramComponent},
   {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
