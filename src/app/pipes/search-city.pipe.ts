import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCity'
})
export class SearchCityPipe implements PipeTransform {

  transform(cidades, ...args: any[]): any {
    if(!args[0]){
      return cidades;
    } 
    return cidades.filter(cidade => cidade.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }

}
