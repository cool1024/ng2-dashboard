import { Injectable } from '@angular/core';
import { Config } from '../config/config';

@Injectable()
export class SystemService {

  private config: { theme: any, server: any } = { theme: {}, server: {} }

  constructor() {
    this.config.theme = Config.THEME
    this.config.server = Config.SERVER
  }

  get theme(): { bgColor: string, fontColor: string, activeColor: string, bgImage: string } {
    return this.config.theme
  }

  set theme(theme: { bgColor: string, fontColor: string, activeColor: string, bgImage: string }) {
    this.config.theme.bgColor = theme.bgColor
    this.config.theme.fontColor = theme.fontColor
    this.config.theme.activeColor = theme.activeColor
    this.config.theme.bgImage = theme.bgImage
  }

  get server(): { url: string, source: string } {
    return this.config.server
  }

  get menuSetting(): { size: string } {
    return this.menuConfig
  }

  set menuSetting(config: { size: string }) {
    this.menuConfig.size = config.size || this.menuConfig.size
  }

  private menuConfig: { size: string } = {
    size: 'lg'
  }

}
