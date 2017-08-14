
import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-image-input-upload',
  templateUrl: './image-input-upload.component.html',
  styleUrls: ['./image-input-upload.component.scss']
})

export class ImageInputUploadComponent implements OnChanges {

  @Input() config: any = {}
  @Input() image: string
  @Input() openBtnClassName: string = "btn btn-outline-secondary"
  @Input() removeBtnClassName: string = "btn btn-outline-danger"
  @Input() resetBtnClassName: string = "btn btn-outline-warning"
  @Input() openTitle: string = `<i class="fa fa-file-image-o fa-fw" aria-hidden="true"></i>打开文件`
  @Input() removeTitle: string = `<i class="fa fa-trash fa-fw" aria-hidden="true"></i>`
  @Input() resetTitle: string = `<i class="fa fa-refresh fa-fw" aria-hidden="true"></i>`
  @Input() imageStyle: any = { 'max-width': '100%', 'max-height': '200px' }
  @Input() errorAlertText: string = "Upload Failed!"
  @Output() onChange: EventEmitter<{ file: Blob, image: string }> = new EventEmitter<{ file: Blob, image: string }>()
  @ViewChildren('img_pad') img_pad: HTMLImageElement;
  showImage: boolean = false
  isLoading: boolean = false
  isFailed: boolean = false
  _config: { upload: (Blob, callback: (result: boolean) => void) => void, autoDelete: boolean }

  constructor(private http: Http) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this._config = {
      autoDelete: changes.config.currentValue.autoDelete || false,
      upload: changes.config.currentValue.upload
    }
    if (!changes.image.firstChange) this.img_pad.src = changes.image.currentValue
  }

  changeFile(img: HTMLImageElement, files: Blob[]) {
    this.isFailed = false
    if (files.length > 0) {
      this.onChange.emit({ file: files[0], image: this.image })
      img.src = window.URL.createObjectURL(files[0])
      this.showImage = true
      this.uploadImage(files[0])
    }
  }

  resetInput(img: HTMLImageElement, input: HTMLInputElement) {
    img.src = this.image
    this.showImage = false
    this.isFailed = false
    this.isLoading = false
    input.value = ""
    this.onChange.emit({ file: null, image: this.image })
  }

  cleanInput(img: HTMLImageElement, input: HTMLInputElement) {
    this.image = ""
    img.src = this.image
    this.showImage = false
    this.isFailed = false
    this.isLoading = false
    input.value = ""
    this.onChange.emit({ file: null, image: '' })
  }

  uploadImage(file: Blob) {
    this.isLoading = true
    let formData = new FormData()
    this._config.upload(file, result => {
      this.isLoading = !result
      this.isFailed = !result
    })
  }
}
