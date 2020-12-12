import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSeason'
})
export class FilterSeasonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
