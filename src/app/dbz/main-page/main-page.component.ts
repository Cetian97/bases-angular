import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: "Ernesto",
    poder: 5
  }

  // get personajes():  Personaje[] {
  //    return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(nPersonaje: Personaje) {
  //   console.log("Main page component");
  //   console.log(nPersonaje);

  //   this.dbzService.personajes.push(nPersonaje);
    
  // }

  constructor () {
    
  }

}
