import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-images-input-form',
  templateUrl: './images-input-form.component.html',
  styleUrls: ['./images-input-form.component.scss']
})
export class ImagesInputFormComponent implements OnInit {
  @ViewChildren('sortablejs') sortablejs: any
  @Input() images: string
  @Input() openBtnClassName: string = "btn btn-outline-secondary"
  @Input() resetBtnClassName: string = "btn btn-outline-warning"
  @Input() openTitle: string = `<i class="fa fa-file-image-o fa-fw" aria-hidden="true"></i>打开文件`
  @Input() resetTitle: string = `<i class="fa fa-refresh fa-fw" aria-hidden="true"></i>`
  @Input() imageStyle: any = { 'max-width': '100%', 'max-height': '200px' }
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>()
  imagesArray = new Array<{ type: string, file: Blob, url: string }>()
  showImage: boolean = false
  options: SortablejsOptions = {
    onUpdate: (event: any) => {
      this.onChange.emit(this.imagesArray)
    }
  };

  constructor() { }

  ngOnInit(): void {
    if (!!this.images) {
      this.images.split(',').forEach(element => {
        this.imagesArray.push({ type: 'url', file: null, url: element })
      });
    }
  }

  changeFile(files: any[]) {
    let cx = 0
    for (let i = 0; i < files.length; i++) {
      this.readFile(files[i], () => {
        if (++cx >= files.length) {
          this.onChange.emit(this.imagesArray)
        }
      })
    }
  }

  getUrl(url: string) {
    return `url(${url})`
  }

  removeImage(index: number) {
    this.imagesArray.splice(index, 1)
    this.onChange.emit(this.imagesArray)
  }

  readFile(file: any, callback: Function) {
    let reader = new FileReader()
    reader.addEventListener('load', res => { this.imagesArray.push({ type: 'file', file: file, url: reader.result }); callback() })
    reader.addEventListener('erro', e => console.error(e))
    reader.readAsDataURL(file)
  }

  resetInput(input: HTMLInputElement) {
    this.imagesArray.splice(0)
    if (!!this.images) {
      this.images.split(',').forEach(element => {
        this.imagesArray.push({ type: 'url', file: null, url: element })
      });
    }
    input.value = ''
  }


}
