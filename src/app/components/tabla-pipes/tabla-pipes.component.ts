import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabla-pipes",
  templateUrl: "./tabla-pipes.component.html",
  styleUrls: ["./tabla-pipes.component.css"]
})
export class TablaPipesComponent implements OnInit {
  ngOnInit() {}

  title = "pipes1";
  nombre: string = "Luis";
  apellido: string = "Peralta";
  numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  decimal = 3.1415;
  porcentaje = 0.3432;
  dinero = 1.4546;
  fecha = new Date();
  ejemplo = " mi pipe ";
  personas = [
    {
      nombre: "Luz",
      edad: 15,
      direccion: "las Malvinas"
    },
    {
      nombre: "Luis",
      edad: 34,
      direccion: "las Malvinas"
    },
    {
      nombre: "Angel",
      edad: 25,
      direccion: "las Malvinas"
    }
  ];

}
