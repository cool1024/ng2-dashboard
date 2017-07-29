import { Component } from '@angular/core';
import { SystemService } from './system/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private systemService: SystemService) { }

  minSetting = this.systemService.menuSetting

}
