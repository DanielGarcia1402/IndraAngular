import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';
import { clientesService } from './clientesService';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') private readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') private readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') private readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') private readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') private readonly mdlCellTop = true;

 
  public response:any = [];
  public clientess:any = [];
  public dni: String;
  public info:any = [];


  constructor(private clientesService : clientesService) {}

  //Action for the button
  btnAction:string;
  //Variables to store data
  cliente = {_id:null, cedula:null, nombre:null, direccion:null, telefono:null};

  ngOnInit(): void {
    this.info.push("Guardar");
    this.clientesService.getRols().subscribe(
      res => {
        this.response = res;
        console.log(res);
        this.cargarTabla(this.response);
      },
      err => console.log(err)
    );
  }

  cargarTabla(respuesta){
    respuesta.clientes.forEach((element, index )=> {
      this.clientess.push(
        {_id:element._id, 
          cedula:element.cedula, 
          nombre:element.nombre,
          direccion:element.direccion,
          telefono:element.telefono
        });
    });
    console.log(this.clientess);
  }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  limpiarCampos(){
    this.cliente.cedula ="";
    this.cliente.nombre ="";
    this.cliente.direccion ="";
    this.cliente.telefono ="";
  }

  mensajeEliminar(){
    swal.fire({
      title: 'Eliminación',
      text: 'Exito al eliminar!',
      timer: 8000
    });
  }

  mensajeGuardar(){
    swal.fire({
      title: 'Guardar',
      text: 'Exito al guardar!',
      timer: 8000
    });
  }

  mensajeCargarActualizar(){
    swal.fire({
      title: 'Datos cargados',
      text: 'Exito!',
      timer: 6000
    });
  }

  mensajeActualizar(){
    swal.fire({
      title: 'Actualizar',
      text: 'Exito al actualizar!',
      timer: 8000
    });
  }

  mensajeCamposVacios(){
    swal.fire({
      title: 'Campos nulos',
      text: 'Error!',
      timer: 8000
    });
  }

  cargarActualizar(identificador){
    this.cliente._id = identificador._id
    this.cliente.cedula = identificador.cedula;
    this.cliente.nombre = identificador.nombre;
    this.cliente.direccion = identificador.direccion;
    this.cliente.telefono = identificador.telefono;
    this.mensajeCargarActualizar();
  }

  onDelete(identificador){
    const repu = this.clientess;
    const resp = confirm("Estas seguro de eliminar el cliente ");
    if(resp){
      this.clientesService.deleteRol(identificador)
      .subscribe(data => {
        console.log(data + "data");
        for(let i = 0; i < repu.length; i++){
          if(repu[i]._id == identificador){
            repu.splice(i,1);
          }
        }
      });
      console.log(identificador + "Este es el identificador");
      this.mensajeEliminar();
    } else {
      return;
    }
  }

  onUpdate(identificador, id){
    console.log(identificador);
    this.info.push("Editar");
    this.dni = id;
    this.cargarActualizar(identificador);
  }

  saveUpdate(){
    if(this.cliente.cedula == "" || this.cliente.nombre == "" 
      || this.cliente.direccion == "" || this.cliente.telefono == ""){

        this.mensajeCamposVacios();
        console.log("campos vacios" + 
        this.cliente.cedula + this.cliente.nombre + this.cliente.direccion + this.cliente.telefono);

      } else {
        console.log(this.cliente);
        this.clientesService.updateRol(this.cliente)
        .subscribe(rep => {
          this.response = rep;
          console.log("se actualizaron los datos");
          console.log(this.response);
          this.mensajeActualizar();
          this.limpiarCampos();
        });
      }
  }

  //Save data obtained in the form
  saveCliente(){
    if(this.cliente.cedula == null || this.cliente.nombre == null 
      || this.cliente.direccion == null || this.cliente.telefono == null){

      this.mensajeCamposVacios();
      console.log("campos vacios" + 
      this.cliente.cedula + this.cliente.nombre + this.cliente.direccion + this.cliente.telefono);

    } else {
      console.log(this.cliente);

      let sendCliente = {
        cedula:this.cliente.cedula, 
        nombre:this.cliente.nombre, 
        direccion:this.cliente.direccion, 
        telefono:this.cliente.telefono}

      this.clientesService.addRol(sendCliente)
      .subscribe(clientes =>{

        this.response = clientes;
        console.log("se guardaron los datos");
        console.log(this.response);
        this.mensajeGuardar();
        this.limpiarCampos();

      });
    }
  }


}
