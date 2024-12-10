import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DeberesRoutingModule } from './deberes-routing.module';
import { Db1Component } from './db1/db1.component';
import { Db2Component } from './db2/db2.component';
import { Db3Component } from './db3/db3.component';
import { Db4Component } from './db4/db4.component';
import { Db5Component } from './db5/db5.component';
import { LayoutComponent } from './layout/layout.component';
 
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';


@NgModule({
  declarations: [
    Db1Component,
    Db2Component,
    Db3Component,
    Db4Component,
    Db5Component,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DeberesRoutingModule,
    RouterModule,
    CardModule,
    ButtonModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    ReactiveFormsModule,
    
  ]
})
export class DeberesModule { }
