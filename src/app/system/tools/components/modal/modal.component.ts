import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() config: { title: string, inputs: Array<{ title: string, name: string, placeholder: string, type: string, }>, buttons: Array<{ title: string, type: string }> }

  @Input() show: boolean;

  @Input() data: any

  @Output() dismiss: EventEmitter<any>

  @Output() close: EventEmitter<any>

  @ViewChild('pad') pad: any;

  constructor() {

    this.config = {
      title: '@Modal',
      inputs: [
        { title: 'E-mail', name: 'email', placeholder: 'please enter your email', type: 'input' },
        { title: 'Password', name: 'password', placeholder: 'please enter your password', type: 'password' },
        { title: 'Description', name: 'description', placeholder: 'please enter your email', type: 'textarea' },
      ],
      buttons: [
        { title: 'Close', type: 'close' },
        { title: 'Confirm', type: 'dismiss' },
      ]
    }

    this.data = {}
  }

  open() {
    this.show = true
  }

  _close() {
    this.show = false
    this.close.emit(this.data)
  }

  _dismiss() {
    this.show = false
    this.dismiss.emit(this.data)
  }

  tryClose(event) {
    if (event.target === this.pad.nativeElement) {
      this._close()
    }
  }

}
