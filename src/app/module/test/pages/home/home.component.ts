import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  image: any = new Blob()

  tryUpload() {
    let formData = new FormData()
    formData.append('image', this.image)
    //this.http.post('http://www.baidu.com')
  }

}
