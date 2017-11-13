import { Pipe, PipeTransform } from "@angular/core";
declare var Hebcal: any;

@Pipe({
  name: "hebDate"
})
export class HebDatePipe implements PipeTransform {

  transform(value: Date): string {
    const hDate = new Hebcal.HDate(new Date(value)).toString("h");
    return hDate;
  }

}
