import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDesc',
})
export class ShortDescPipe implements PipeTransform {
  transform(value: string, limit: number = 250): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
