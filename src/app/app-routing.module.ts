import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestModule } from './module/test/test.module';

const routes: Routes = [
  { path: '', redirectTo: '/test/home', pathMatch: 'full' },
  { path: 'test', loadChildren: 'app/module/test/test.module#TestModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
