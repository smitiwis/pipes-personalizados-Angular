import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "ver" })
export class PalabraPipe implements PipeTransform {
  transform(value: any, visible: boolean = true): any {

    if (visible == true) {
      let salida: string = "";

      for (let i = 0; i < value.length; i++) {
        salida = salida + "*"; //  +=
      }
      return salida;
      
    } else {
      return value;
    }
  }
}
