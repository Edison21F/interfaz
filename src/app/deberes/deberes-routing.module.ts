import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Db1Component } from './db1/db1.component';
import { Db2Component } from './db2/db2.component';
import { Db3Component } from './db3/db3.component';
import { Db4Component } from './db4/db4.component';
import { Db5Component } from './db5/db5.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
 
  {
    path: '',
    redirectTo:'deberes',
    pathMatch:'full'
  },
  {
    path: 'deberes',
    component: LayoutComponent
  },
  {
    path: 'matrices',
    component: Db1Component
  },
  {
    path: 'primeflex',
    component:Db2Component
  },
  {
    path: 'card',
    component: Db3Component
  },
  {
    path: 'db4',
    component: Db4Component
  },
  {
    path: 'forms',
    component:Db5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeberesRoutingModule { }
