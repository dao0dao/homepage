import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag',
})
export class TagPipe implements PipeTransform {
  transform(text: string): string {
    return '< ' + text + ' />';
  }
}
