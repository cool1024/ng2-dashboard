import { Injectable } from '@angular/core';
import { Config } from '../config/config';

@Injectable()
export class SystemService {

  private config: { theme: any, server: any, content: any } = { theme: {}, server: {}, content: {} }

  constructor() {
    this.config.theme = Config.THEME
    this.config.server = Config.SERVER
    this.config.content = Config.CONTENT
  }

  get theme(): { bgColor: string, fontColor: string, activeColor: string, bgImage: string, mnImage: string } {
    return this.config.theme
  }

  set theme(theme: { bgColor: string, fontColor: string, activeColor: string, bgImage: string, mnImage: string }) {
    this.config.theme.bgColor = theme.bgColor
    this.config.theme.fontColor = theme.fontColor
    this.config.theme.activeColor = theme.activeColor
    this.config.theme.bgImage = theme.bgImage
    this.config.theme.mnImage = theme.mnImage
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

  private menuConfig: { size: string } = {
    size: 'lg'
  }

}
