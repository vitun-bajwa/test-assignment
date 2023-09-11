import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime, map, of } from 'rxjs';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    debugger;
    if (!value) return null;
    if (!args) return value;
    return value.filter((item: any) => {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(args);
    });
  }
}
