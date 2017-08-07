import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-images-input-form',
  templateUrl: './images-input-form.component.html',
  styleUrls: ['./images-input-form.component.scss']
})
export class ImagesInputFormComponent implements OnChanges {

  @Input() images: string
  @Input() openBtnClassName: string = "btn btn-secondary"
  @Input() resetBtnClassName: string = "btn btn-outline-warning"
  @Input() openTitle: string = `<i class="fa fa-file-image-o fa-fw" aria-hidden="true"></i>打开文件`
  @Input() resetTitle: string = `<i class="fa fa-refresh fa-fw" aria-hidden="true"></i>`
  @Input() imageStyle: any = { 'max-width': '100%', 'max-height': '200px' }
  @Output() onChange: EventEmitter<{ files: Blob[], images: string }> = new EventEmitter<{ files: Blob[], images: string }>()
  defaultArray = new Array<string>()
  imagesArray = new Array<any>()
  files = new Array<Blob>()
  showImage: boolean = false

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.images.firstChange) this.defaultArray = changes.images.currentValue.split(',')
  }

  changeFile(files: Blob[]) {
    this.files = this.files.concat(files)
    for (let i = 0; i < files.length; i++) {
      this.imagesArray.push(window.URL.createObjectURL(files[i]))
    }
  }

  resetInput(input: HTMLInputElement) {

  }


}
