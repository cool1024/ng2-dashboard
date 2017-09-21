import { Component, OnInit, Input, ViewChild } from '@angular/core';
declare const Prism;

const LANGUAGE = {
  html: Prism.languages.html,
  typescript: Prism.languages.typescript,
  javascript: Prism.languages.javascript,
  xml: Prism.languages.xml,
  php: Prism.languages.php,
}

@Component({
  selector: 'app-code-pad',
  templateUrl: './code-pad.component.html',
  styleUrls: ['./code-pad.component.scss']
})
export class CodePadComponent implements OnInit {

  @Input() language: string
  @Input() content: string
  @ViewChild('pad') codePad: any

  constructor() { }

  ngOnInit() {

    let html = Prism.highlight(this.content || "", LANGUAGE[this.language || 'html'])

    this.codePad.nativeElement.innerHTML = html

  }

}
