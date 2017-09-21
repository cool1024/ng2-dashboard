import { Component, OnInit } from '@angular/core';
import { SystemService } from './../../../../../dashboard/system.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  //编辑器配置
  options: Object

  //编辑器内容
  editorContent: string

  constructor(private systemService: SystemService) {
    this.options = {
      placeholderText: '请输入文本内容',
      imageInsertButtons: ['imageBack', '|', 'imageUpload', 'imageByURL'],
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
      //['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo']
      charCounterCount: false,
      language: 'zh_cn',
      imageUploadURL: this.systemService.config.server.server + '/upload/editor',
      heightMin: 600,
      events: {
        'froalaEditor.focus': function (e, editor) {

        }
      }
    }
    this.editorContent = "测试数据"
  }

  ngOnInit() { }

}
