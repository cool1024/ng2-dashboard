import { Injectable } from '@angular/core';
import { Config } from '../config/system';
import { LoginPageConfig } from './../config/login';
import { AdminPageConfig } from './../config/admin';

@Injectable()
export class SystemService {

  constructor() {
    this.config.theme = Config.THEME
    this.config.server = Config.SERVER
    this.config.content = Config.CONTENT
  }

  get theme(): any {
    return this.config.theme
  }

  set theme(theme: any) {
    this.theme = theme
  }

  get server(): { url: string, source: string } {
    return this.config.server
  }

  get menuSetting(): { size: string } {
    return this.menuConfig
  }

  get systemContent(): { title: string, version: string, icon: string } {
    return this.config.content
  }

  set menuSetting(config: { size: string }) {
    this.menuConfig.size = config.size || this.menuConfig.size
  }

  public menuConfig: { size: string } = { size: 'lg' }

  public config: { theme: any, server: any, content: any } = { theme: {}, server: {}, content: {} }

  public loginPageConfig = LoginPageConfig

  public adminPageConfig = AdminPageConfig

}
