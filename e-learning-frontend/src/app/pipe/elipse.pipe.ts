import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipse',
  standalone: true
})
export class ElipsePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value && value.length > 50? value.substring(0, 50) + "..." : value;
  }

}
