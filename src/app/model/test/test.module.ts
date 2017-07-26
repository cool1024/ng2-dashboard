import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestRoutingModule } from './test-routing.module'
import { TestComponent } from './pages/test/test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule,
  ],
  declarations: [TestComponent]
})
export class TestModule { }
