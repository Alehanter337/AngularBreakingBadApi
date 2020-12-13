import { Pipe, PipeTransform } from '@angular/core';
import {Character} from '../models/character';


@Pipe({
  name: 'filterSeason'
})
export class FilterSeasonPipe implements PipeTransform {
  transform(list: Character[], season: number): Character[] {
    if (season === 0){
      return list;
    }
    return list.filter((item: Character): boolean => item.appearance && item.appearance.some((appearance: number): boolean => appearance === season));
  }
}

