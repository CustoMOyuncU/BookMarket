import { Pipe, PipeTransform } from '@angular/core';
import { BookDetail } from '../models/bookDetail';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: BookDetail[], filterText: string): BookDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:BookDetail)=>c.bookName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
