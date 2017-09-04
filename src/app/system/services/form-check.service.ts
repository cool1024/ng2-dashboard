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

  //将选项转换为ngSelect选中数组（ng2-select装用）
  toNg2ActiveItem(id: number, items: Array<{ id: number, text: string }>) {
    return items.filter(e => {
      if (e.id == id) {
        return true
      }
      else if (e.id == -1 && id == 0) {
        return true
      }
      return false
    })
  }

  //简单拷贝JSON数据
  copyJson(json: any): any {
    let temp = {}
    for (let key in json) {
      temp[key] = json[key]
    }
    return temp
  }

  //排序时获取排序后的元素的id串.形式如："1,2,3,4,5"
  getIds(array: Array<any>): string {
    let ids: Array<number> = new Array<number>();
    array.forEach(e => ids.push(e.id));
    return ids.join();
  }

  //ids串转数组.形式如："1,2,3,4,5" 转 [1,2,3,4]
  idsToArray(ids: string): Array<number> {
    let array = new Array<number>()
    if (ids) {
      ids.split(',').forEach(e => {
        array.push(parseInt(e))
      })
    }
    return array;
  }

  //ids串中添加子项（不重复添加）.形式如："1,2,3,4,5" 添加6 => "1,2,3,4,5,6"
  idsPush(ids: string, id): string {
    let array = this.idsToArray(ids)
    if (array.indexOf(id) < 0) {
      array.push(id)
    }
    return array.join()
  }

  //ids串中移除子项（会移除重复项）.形式如："1,2,3,4,5" 移除5 => "1,2,3,4"
  idsRemove(ids: string, id): string {
    let array = this.idsToArray(ids)
    let result = new Array<number>()
    array.forEach(e => {
      if (e != id) result.push(e)
    })
    return result.join()
  }

}
