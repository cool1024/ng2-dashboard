
/*第三方插件使用示例：路由文件*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';

const routes: Routes = [
  { path: 'datepicker', component: DatepickerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExampleRoutingModule { }
