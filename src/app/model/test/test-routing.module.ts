import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmWindowComponent } from './pages/confirm-window/confirm-window.component';
import { AlertWindowComponent } from './pages/alert-window/alert-window.component';
import { ChartsDemoComponent } from './pages/charts-demo/charts-demo.component';
import { SortableDemoComponent } from './pages/sortable-demo/sortable-demo.component';
import { SelectDemoComponent } from './pages/select-demo/select-demo.component';


const routes: Routes = [
  { path: 'test/confirm', component: ConfirmWindowComponent },
  { path: 'test/alert', component: AlertWindowComponent },
  { path: 'test/charts', component: ChartsDemoComponent },
  { path: 'test/sortable', component: SortableDemoComponent },
  { path: 'test/select', component: SelectDemoComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule { }
