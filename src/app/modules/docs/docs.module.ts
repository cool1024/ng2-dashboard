/*angular module*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsRoutingModule } from './docs.routing'

/*tool-module*/
import { ToolModule } from './../../system/tools/tool.module';

/*page list */
import { LumenComponent } from './lumen/lumen.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  imports: [
    CommonModule,
    DocsRoutingModule,
    ToolModule,
  ],
  declarations: [

  LumenComponent,

  AngularComponent]
})
export class DocsModule { }
