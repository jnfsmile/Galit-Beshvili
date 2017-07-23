import { Pipe, PipeTransform } from '@angular/core';
declare var Hebcal: any;

@Pipe({name: 'hebdate'})
export class HebDatePipe implements PipeTransform {
  transform(value: Date): string {
    let hDate = new Hebcal.HDate(new Date(value)).toString('h');
    return hDate;
  }
}
