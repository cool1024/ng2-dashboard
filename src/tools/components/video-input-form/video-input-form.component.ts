import { Component, Input, Output, ViewChildren, EventEmitter, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-input-form',
  templateUrl: './video-input-form.component.html',
  styleUrls: ['./video-input-form.component.scss']
})
export class VideoInputFormComponent {

  constructor(private sanitizer: DomSanitizer) { }

  //初始化默认视频地址
  @Input() src: string | SafeResourceUrl

  //视频控件样式
  @Input() videoStyle: any

  //视频文件变化执行
  @Output() onChange: EventEmitter<Blob> = new EventEmitter<Blob>()

  showVideo: boolean = false

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes.src.firstChange) {
      this.src = changes.src.currentValue
    }
  }

  changeFile(files: Blob[]) {
    if (files.length > 0) {
      this.onChange.emit(files[0])
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(files[0]))
      this.showVideo = true
    }
  }

  cleanInput() {
    this.src = ""
    this.showVideo = false
    this.onChange.emit(null)
  }

}
