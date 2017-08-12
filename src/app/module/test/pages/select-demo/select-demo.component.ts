import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss']
})
export class SelectDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  /*select data*/
  select: any = {
    one: 1,
    two: 2,
    three: 3,
    four: 1,
  }

  /*ng2-select*/
  public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  private value: any = {};

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  html_code = `
    <select class="custom-select" [(ngModel)]="selectValue" name="type">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
  `

  ts_code = `
    //如果需要选中默认值的话，可以直接对绑定数据设置初始值
    //如果下拉选项是通过请求获取的，那么可以在请求完成后对selectValue进行赋值
    selectValue:number=1
  `
}
