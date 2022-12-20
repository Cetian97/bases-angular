import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman","Ironman","Thor","Hulk"];
  heroeBorrado: string = "";

  borrarHeroe(): void {
    console.log("Borrando...");
    this.heroeBorrado = this.heroes.pop() || "";
  }

}
