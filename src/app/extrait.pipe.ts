import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extrait'
})
export class ExtraitPipe implements PipeTransform {

  transform(value: any, limit?: any): any {
    return value.substr(0,limit)+'...';
  }

}
