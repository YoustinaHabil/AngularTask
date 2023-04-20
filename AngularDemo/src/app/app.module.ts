import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExhabitorsComponent } from './exhabitors/exhabitors.component';
import { SalesComponent } from './sales/sales.component';
import { DelegatesComponent } from './delegates/delegates.component';
import { SettingsComponent } from './settings/settings.component';
import { ProgramComponent } from './program/program.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DealsComponent } from './deals/deals.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StatisticsComponent } from './statistics/statistics.component';
import{HttpClientModule}from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
// import { NgModel } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ExhabitorsComponent,
    SalesComponent,
    DelegatesComponent,
    SettingsComponent,
    ProgramComponent,
    PageNotFoundComponent,
    DealsComponent,
ActivitiesComponent,
    StatisticsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatCardModule,
    Ng2OrderModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    DragDropModule
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
