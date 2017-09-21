import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByParentId',
  pure: false
})

export class TreeParentPipe implements PipeTransform {

  transform(array: any[], parentid: number): any {
    return array.filter(e => e.parentid == parentid);
  }

}
