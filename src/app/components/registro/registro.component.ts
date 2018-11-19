import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { RestSolicitudService } from '../../services/rest-servicios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  title: 'Registro de usuarios';
  error: string;
  respuesta: object
  data: any;
  usuario: User = {
    nombre: '',
    apellidos: '',
    tipoDocumento: '',
    numeroDocumento: null,
    correo: '',
    telefono: null
  };

  constructor(private _service: RestSolicitudService) { this.getList(); }

  getList() {
    this.data = [
      {
        'tipoDocumento': 'CC',
        'nombre': 'Cedula de ciudadania'
      },
      {
        'tipoDocumento': 'TI',
        'nombre': 'Tarjeta de identidad'
      }
    ];
  }

  selectName() {
    alert(this.usuario.tipoDocumento);
  }

  ngOnInit() { }

  registrarUsuario() {
    this._service.GuardarUsuario(this.usuario).subscribe(
      (resp) => {
        this.respuesta = resp;
      },
      (error) => this.error = error
    );
  }
}
