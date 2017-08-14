import { Injectable } from '@angular/core';

const id: string = "app-loading-service-dom-index-1000"
const flash: any = {
  span:
  `
      <div class="loading-span-dom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    `,
  squre:
  `
      <div class="circle-loader">
          <div class="circle-line">
              <div class="circle circle-blue"></div>
              <div class="circle circle-blue"></div>
              <div class="circle circle-blue"></div>
          </div>
          <div class="circle-line">
              <div class="circle circle-yellow"></div>
              <div class="circle circle-yellow"></div>
              <div class="circle circle-yellow"></div>
          </div>
          <div class="circle-line">
              <div class="circle circle-red"></div>
              <div class="circle circle-red"></div>
              <div class="circle circle-red"></div>
          </div>
          <div class="circle-line">
              <div class="circle circle-green"></div>
              <div class="circle circle-green"></div>
              <div class="circle circle-green"></div>
          </div>
      </div>
    `,
  circle:
  `
    <div class="loading-circle-dom">
        <div class="dot white"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
    `
}
@Injectable()
export class LoadingService {

  constructor() { }

  /*icon loading*/
  show(config: { icon: string } = { icon: "fa fa-spinner fa-pulse fa-5x fa-fw" }) {
    this.remove()
    let dom: HTMLDivElement = this.create()
    dom.innerHTML = `
      <i class="${config.icon}"></i>
      <span class="sr-only">Loading...</span>
    `
    document.body.appendChild(dom)
  }

  /*css3 loading*/
  play(player: string) {
    this.remove()
    let dom: HTMLDivElement = this.create()
    dom.innerHTML = player
    document.body.appendChild(dom)
  }


  hiden() {
    this.remove()
  }

  private create(): HTMLDivElement {
    let dom: HTMLDivElement = document.getElementById(id) as HTMLDivElement || document.createElement('div')
    dom.id = id
    dom.className = "fixed-top h-100 w-100 loading-dom"//invisible
    return dom
  }

  private remove() {
    let dom = document.getElementById(id)
    if (!!dom) {
      document.body.removeChild(dom)
    }
  }

  get player(): { span: string, squre: string ,circle:string} {
    return flash
  }

}
