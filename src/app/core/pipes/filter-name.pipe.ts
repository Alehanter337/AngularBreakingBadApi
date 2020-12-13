import { Pipe, PipeTransform } from '@angular/core';
import {Character} from '../models/character';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(list: Character[], name: string): Character[] {
    if (!name.trim()) {
      return list;
    }

    return list.filter((item: Character) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
  }

}
