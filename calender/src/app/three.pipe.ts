import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'three',
  standalone: true
})
export class ThreePipe implements PipeTransform {

  transform(result: String, ...args: unknown[]): unknown {
    result = result.split('').reverse().join('');
    let result2 = '';
    let a = 0;
    for (let i = 0; i < result.length; i++) {
      result2 += result[i];
      if ((result2.length-a) % 3 === 0 && i!== result.length - 1) {
       result2 += ',';
       a++;
      }
      
    }
    result2 = result2.split('').reverse().join('');
    
    return result2;
  }

}
