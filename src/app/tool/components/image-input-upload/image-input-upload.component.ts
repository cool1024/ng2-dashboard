
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
  @Input() openBtnClassName: string = "btn btn-secondary"
  @Input() removeBtnClassName: string = "btn btn-outline-danger"
  @Input() resetBtnClassName: string = "btn btn-outline-warning"
  @Input() openTitle: string = `<i class="fa fa-file-image-o fa-fw" aria-hidden="true"></i>打开文件`
  @Input() removeTitle: string = `<i class="fa fa-trash fa-fw" aria-hidden="true"></i>`
  @Input() resetTitle: string = `<i class="fa fa-refresh fa-fw" aria-hidden="true"></i>`
  @Input() imageStyle: any = { 'max-width': '100%', 'max-height': '200px' }
  @Output() onChange: EventEmitter<{ file: Blob, image: string }> = new EventEmitter<{ file: Blob, image: string }>()
  @ViewChildren('img_pad') img_pad: HTMLImageElement;
  showImage: boolean = false
  _config: any = { uploadApiUrl: '', deleteApiUrl: '', sourceUrl: '', autoDelete: false, name: "image", params: {}, headers: new Headers() }

  constructor(private http: Http) { }

  ngOnChanges(changes: SimpleChanges): void {
    this._config = this.config.uploadApiUrl || this._config.uploadApiUrl
    this._config = this.config.deleteApiUrl || this._config.deleteApiUrl
    this._config = this.config.sourceUrl || this._config.sourceUrl
    this._config = this.config.autoDelete || this._config.autoDelete
    this._config = this.config.name || this._config.name
    this._config = this.config.params || this._config.params
    this._config = this.config.headers || this._config.headers
    if (!changes.image.firstChange) this.img_pad.src = changes.image.currentValue
  }

  changeFile(img: HTMLImageElement, files: Blob[]) {
    console.log(1)
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

  uploadImage(file: Blob) {
    let formData = new FormData()
    formData.append(this._config.name, file)
    for (let key in this._config.params) {
      formData.append(key, this._config[key])
    }
    this.http.post(this._config.uploadApiUrl, formData, new RequestOptions({ headers: this._config.headers })).subscribe()
  }
}
