import { Pipe, PipeTransform, isDevMode } from '@angular/core';

@Pipe({
  name: 'link',
})
export class LinkPipe implements PipeTransform {
  transform(value?: string) {
    if (isDevMode()) {
      return value;
    }
    return '/homepage' + value;
  }
}
