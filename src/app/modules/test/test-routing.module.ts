import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmWindowComponent } from './pages/confirm-window/confirm-window.component';
import { AlertWindowComponent } from './pages/alert-window/alert-window.component';
import { ChartsDemoComponent } from './pages/charts-demo/charts-demo.component';
import { SortableDemoComponent } from './pages/sortable-demo/sortable-demo.component';
import { SelectDemoComponent } from './pages/select-demo/select-demo.component';
import { TableDemoComponent } from './pages/table-demo/table-demo.component';
import { FormDemoComponent } from './pages/form-demo/form-demo.component';
import { LoadingServiceComponent } from './pages/loading-service/loading-service.component';
import { ToastrDemoComponent } from './pages/toastr-demo/toastr-demo.component';
// import { HomeComponent } from './pages/home/home.component';
import { UploadDemoComponent } from './pages/upload-demo/upload-demo.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { UploadServiceComponent } from './pages/upload-service/upload-service.component';

const routes: Routes = [
  /*home page*/
  // { path: 'home', component: HomeComponent },

  /*tool component*/
  { path: 'confirm', component: ConfirmWindowComponent },
  { path: 'alert', component: AlertWindowComponent },
  { path: 'charts', component: ChartsDemoComponent },
  { path: 'sortable', component: SortableDemoComponent },
  { path: 'select', component: SelectDemoComponent },
  { path: 'table', component: TableDemoComponent },
  { path: 'form', component: FormDemoComponent },
  { path: 'upload', component: UploadDemoComponent },
  
  /*tool service*/
  { path: 'loading', component: LoadingServiceComponent },
  { path: 'toastr', component: ToastrDemoComponent },
  { path: 'request', component: RequestServiceComponent },
  { path: 'file', component: UploadServiceComponent },
  
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
