import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrayCheck' })
export class ArrayCheckPipe implements PipeTransform {
  transform(value: any): boolean {
    return Array.isArray(value) ? value.length > 0 : false;
  }
}
