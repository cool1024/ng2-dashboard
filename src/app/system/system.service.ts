import { Injectable } from '@angular/core';

@Injectable()
export class SystemService {

  private config: { theme: any, server: any } = { theme: {}, server: {} }

  constructor() {
    this.config.theme = {
      bgColor: "rgba(0, 0, 0, 0.62)",
      fontColor: "white",
      activeColor: "white",
    }
    this.config.server = {
      url: "",
      source: "",
    }
  }

  get theme(): { bgColor: string, fontColor: string, activeColor: string } {
    return this.config.theme
  }

  set theme(theme: { bgColor: string, fontColor: string, activeColor: string }) {
    this.config.theme.bgColor = theme.bgColor
    this.config.theme.fontColor = theme.fontColor
    this.config.theme.activeColor = theme.activeColor
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
