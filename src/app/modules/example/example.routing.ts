
/*第三方插件使用示例：路由文件*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { CardComponent } from './pages/card/card.component';
import { EditorComponent } from './pages/editor/editor.component';

const routes: Routes = [
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'card', component: CardComponent },
  { path: 'editor', component: EditorComponent },
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
