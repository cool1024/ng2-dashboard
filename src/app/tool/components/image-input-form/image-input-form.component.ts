import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-input-form',
  templateUrl: './image-input-form.component.html',
  styleUrls: ['./image-input-form.component.scss']
})
export class ImageInputFormComponent implements OnChanges {

  @Input() image: string
  @Output() onChange: EventEmitter<Blob> = new EventEmitter<Blob>()
  showImage: boolean = false

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  changeFile(img, files: any) {
    console.log(1)
    if (files.length > 0) {
      this.onChange.emit(files[0])
      console.log(files[0])
      img.src = window.URL.createObjectURL(files[0])
      this.showImage = true
    }
  }

}
