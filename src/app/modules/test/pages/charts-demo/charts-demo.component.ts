import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-demo',
  templateUrl: './charts-demo.component.html',
  styleUrls: ['./charts-demo.component.scss']
})
export class ChartsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // 需要显示的数据
  public chartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '安纳斯' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: '帮租房' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: '小租贝贝' }
  ];

  //底部标签名称
  public chartLabels: Array<any> = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'];

  //图标配置参数
  public lineChartOptions: any = { responsive: true };
  public barChartOptions: any = { scaleShowVerticalLines: false, responsive: true };

  //样式参数
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(146, 194, 234,0.2)',
      borderColor: 'rgba(146, 194, 234,1)',
      pointBackgroundColor: 'rgba(146, 194, 234,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(146, 194, 234,,0.8)'
    },
    {
      backgroundColor: 'rgba(224, 163, 73,0.2)',
      borderColor: 'rgba(224, 163, 73,1)',
      pointBackgroundColor: 'rgba(224, 163, 73,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(224, 163, 73,0.8)'
    },
    {
      backgroundColor: 'rgba(133, 167, 200,0.2)',
      borderColor: 'rgba(133, 167, 200,1)',
      pointBackgroundColor: 'rgba(133, 167, 200,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(133, 167, 200,0.8)'
    },
  ];

  //饼图
  public doughnutChartLabels: string[] = ['安纳斯', '帮租房', '小租贝贝'];
  public doughnutChartData: number[] = [100, 200, 300];

}
