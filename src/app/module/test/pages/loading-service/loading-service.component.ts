import { Component, OnInit } from '@angular/core';
import { LoadingService } from './../../../../system/service/loading.service';

@Component({
  selector: 'app-loading-service',
  templateUrl: './loading-service.component.html',
  styleUrls: ['./loading-service.component.scss'],
  providers: [LoadingService]
})
export class LoadingServiceComponent implements OnInit {

  constructor(private loadingService: LoadingService) { }

  ngOnInit() { }

  showLoading(icon: string) {

    this.loadingService.show({ icon: icon })

    //waiting 3s close it
    setTimeout(_ => {
      this.loadingService.hiden()
    }, 3000)
  }

  showFlash(type: string) {

    switch (type) {
      case 'span':
        this.loadingService.play(this.loadingService.player.span)
        break
      case 'squre':
        this.loadingService.play(this.loadingService.player.squre)
        break
      case 'circle':
        this.loadingService.play(this.loadingService.player.circle)
        break
    }

    //waiting 3s close it
    setTimeout(_ => {
      this.loadingService.hiden()
    }, 3000)
  }

}
