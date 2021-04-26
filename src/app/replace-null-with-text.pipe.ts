import { Pipe, PipeTransform } from "@angular/core";

//Pipe to replace null/undefined values
@Pipe({
    name: 'replaceNullWithText'
  })
  export class ReplaceNullWithTextPipe implements PipeTransform {
  
    transform(value: any, repleceText: string = 'N/A'): any {
      if (typeof value === 'undefined' || value === null) {
        return repleceText;
      }
      return value;
    }
  
  }