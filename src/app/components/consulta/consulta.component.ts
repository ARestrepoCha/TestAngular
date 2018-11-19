import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.interface';
import { RestSolicitudService } from '../../services/rest-servicios.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  personajes: Person[];
  selectedPerson: Person;
  error: string;
  data: any;

  onSelect(personaje: Person): void {
    this._service.ObtenerDetalle(personaje).subscribe(
      (resp) => {
        this.selectedPerson.name = resp["name"];
        this.selectedPerson.birth_year = resp["birth_year"];
        this.selectedPerson.gender = resp["gender"];
        this.selectedPerson.homeworld = resp["homeworld"];
        this.selectedPerson.url = resp["url"];
      },
      (error) => this.error = error
    );    
  }

  constructor(private _service: RestSolicitudService) { }

  obtenerPersonajes(): void {    
    this._service.ObtenerPersonajes().subscribe(
      (resp) => {        
        this.data = resp;
        this.personajes = resp["results"];
      },
      (error) => this.error = error
    );    
  }

  ngOnInit() {
    this.obtenerPersonajes();
  }

}
