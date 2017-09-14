
/*使用文档：路由文件*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LumenComponent } from './lumen/lumen.component';
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  { path: 'lumen', component: LumenComponent },
  { path: 'angular', component: AngularComponent }, 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocsRoutingModule { }
