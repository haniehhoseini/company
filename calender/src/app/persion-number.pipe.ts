import { Pipe, PipeTransform } from '@angular/core';
import { formatIsoTimeString } from '@fullcalendar/core/internal';

@Pipe({
  name: 'persionNumber',
  standalone: true
})
export class PersionNumberPipe implements PipeTransform {
  persionNumber = ['۰' , '۱' , '۲' , '۳' , '۴' ,  '۵' , '۶' ,  '۷'  , '۸' ,  '۹'  ];
  
  
  transform(value: String): string {
    let result = '';
    
    
    for (let i = 0; i < value.length; i++) {
      const digit = value[i];
      const index = parseInt(digit, 10);
      
      if (!isNaN(index) && index >= 0 && index <= 9) {
        result += this.persionNumber[index];

      } else {
        result += digit;
        
      }

    }
    return result;
  }



}
