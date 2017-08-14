import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-images-input-upload',
  templateUrl: './images-input-upload.component.html',
  styleUrls: ['./images-input-upload.component.scss']
})
export class ImagesInputUploadComponent implements OnInit {

  @ViewChildren('sortablejs') sortablejs: any
  @Input() images: string
  @Input() openBtnClassName: string = "btn btn-outline-secondary"
  @Input() resetBtnClassName: string = "btn btn-outline-warning"
  @Input() openTitle: string = `<i class="fa fa-file-image-o fa-fw" aria-hidden="true"></i>打开文件`
  @Input() resetTitle: string = `<i class="fa fa-refresh fa-fw" aria-hidden="true"></i>`
  @Input() imageStyle: any = { 'max-width': '100%', 'max-height': '200px' }
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>()
  imagesArray = new Array<{ type: string, file: Blob, url: string, uploading: boolean }>()
  showImage: boolean = false
  options: SortablejsOptions = {
    onUpdate: (event: any) => {
      this.onChange.emit(this.imagesArray)
    }
  };
  @Input() config: { upload: (file: Blob, callback: (result: boolean) => void) => void }

  constructor() { }

  ngOnInit(): void {
    if (!!this.images) {
      this.images.split(',').forEach(element => {
        this.imagesArray.push({ type: 'url', file: null, url: element, uploading: false })
      });
    }
  }

  changeFile(files: any[]) {
    let cx = 0
    let start = this.imagesArray.length
    for (let i = 0; i < files.length; i++) {
      this.readFile(start + i, files[i], () => {
        if (++cx >= files.length) {
          //remove all failed dom
          this.cleanErrorDom()
          this.onChange.emit(this.imagesArray)
        }
      }, )
    }
  }

  getUrl(url: string) {
    return `url(${url})`
  }

  removeImage(index: number) {
    this.imagesArray.splice(index, 1)
    this.onChange.emit(this.imagesArray)
  }

  uploadImage(index: number, file: Blob, callback: Function, item: any) {
    this.config.upload(file, (result: boolean): void => { item.uploading = !result; callback() })
  }

  cleanErrorDom() {
    let temp = new Array<{ type: string, file: Blob, url: string, uploading: boolean }>()
    this.imagesArray.forEach(e => { if (e.uploading == false) temp.push(e) })
    this.imagesArray = temp
  }

  readFile(index: number, file: any, callback: Function) {
    let reader = new FileReader()
    reader.addEventListener('load', res => {
      this.imagesArray.push({ type: 'file', file: file, url: reader.result, uploading: true });
      this.uploadImage(index, file, callback, this.imagesArray[this.imagesArray.length - 1])
    })
    reader.addEventListener('erro', e => console.error(e))
    reader.readAsDataURL(file)
  }

  resetInput(input: HTMLInputElement) {
    this.imagesArray.splice(0)
    this.images.split(',').forEach(element => {
      this.imagesArray.push({ type: 'url', file: null, url: element, uploading: false })
    });
    input.value = ''
  }
}
