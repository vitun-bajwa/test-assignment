import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any[], properties: any[], filter: string) {
    if (!array) {
      return [];
    }
    if (!properties.length || !filter) {
      return array;
    }

    filter = filter.trim().toLowerCase();
    return array.filter((element:any) => {
      !!(properties.find((property:any) => {
        const valueString = product[property].toString().toLowerCase();
        return valueString.includes(filter)
      }))
    });
  }
}
