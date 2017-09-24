/*angular module*/
import { NgModule } from '@angular/core';
import { DocsRoutingModule } from './docs.routing'

/*tool-module*/
import { ToolModule } from './../../../tools/tool.module';

/*page list */
import { LumenComponent } from './lumen/lumen.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  imports: [
    DocsRoutingModule,
    ToolModule,
  ],
  declarations: [
    LumenComponent,
    AngularComponent,
  ]
})
export class DocsModule { }
