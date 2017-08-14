import { Injectable } from '@angular/core';

@Injectable()
export class FormCheckService {

  constructor() { }

  getPrice(number: string) {
    let price: any = parseFloat(number).toFixed(2);
    return price == 'NaN' ? '0.00' : price;
  }

  getNumber(number: string) {
    let count: any = parseInt(number);
    return isNaN(count) ? '0' : count;
  }

  getIds(array: Array<any>): string {
    let ids: Array<number> = new Array<number>();
    array.forEach(e => ids.push(e.id));
    return ids.join();
  }

}
