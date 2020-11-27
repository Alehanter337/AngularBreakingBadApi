import { Pipe, PipeTransform} from '@angular/core';
import { Character } from '../models/character';
import { Status } from '../models/status';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform{

  transform(list: Character[], status: Status): Character[]{
    if (!list){
      return null;
  }
    if (status === 'all'){
      return list;
    }

  }
}
