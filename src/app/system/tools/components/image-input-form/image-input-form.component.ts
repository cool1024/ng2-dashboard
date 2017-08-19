import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-image-input-form',
  templateUrl: './image-input-form.component.html',
  styleUrls: ['./image-input-form.component.scss']
})
export class ImageInputFormComponent implements OnChanges {


  @Input() image: string
  @Input() openBtnClassName: string = "btn btn-outline-secondary"
  @Input() removeBtnClassName: string = "btn btn-outline-danger"
  @Input() resetBtnClassName: string = "btn btn-outline-warning"
  @Input() openTitle: string = `<i class="fa fa-file-image-o fa-fw" aria-hidden="true"></i>打开文件`
  @Input() removeTitle: string = `<i class="fa fa-trash fa-fw" aria-hidden="true"></i>`
  @Input() resetTitle: string = `<i class="fa fa-refresh fa-fw" aria-hidden="true"></i>`
  @Input() imageStyle: any = { 'max-width': '100%', 'max-height': '200px' }
  @Output() onChange: EventEmitter<{ file: Blob, image: string }> = new EventEmitter<{ file: Blob, image: string }>()
  @ViewChildren('img_pad') img_pad: HTMLImageElement;
  showImage: boolean = false

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes.image.firstChange) this.img_pad.src = changes.image.currentValue
  }

  changeFile(img: HTMLImageElement, files: Blob[]) {
    if (files.length > 0) {
      this.onChange.emit({ file: files[0], image: this.image })
      img.src = window.URL.createObjectURL(files[0])
      this.showImage = true
    }
  }

  resetInput(img: HTMLImageElement, input: HTMLInputElement) {
    img.src = this.image
    this.showImage = false
    input.value = ""
    this.onChange.emit({ file: null, image: this.image })
  }

  cleanInput(img: HTMLImageElement, input: HTMLInputElement) {
    this.image = ""
    img.src = this.image
    this.showImage = false
    input.value = ""
    this.onChange.emit({ file: null, image: '' })
  }

}
