import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';
import { empresaService } from './empresaService';
import swal from 'sweetalert2';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') private readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') private readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') private readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') private readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') private readonly mdlCellTop = true;

 
  public response:any = [];
  public clientess:any = [];
  public dni: String;
  public dateCreate: String;
  public info:any = [];


  constructor(private empresaService : empresaService) {}

  //Action for the button
  btnAction:string;
  //Variables to store data
  empresa = {_id:null, nit:null, nombre:null, 
    fechaCreacion:null, fechaModificacion:null, codigo:null, nombreCorto:null};

  ngOnInit(): void {
    this.info.push("Guardar");
    this.empresaService.getRols().subscribe(
      res => {
        this.response = res;
        console.log(res);
        this.cargarTabla(this.response);
      },
      err => console.log(err)
    );
  }

  cargarTabla(respuesta){
    respuesta.empresa.forEach((element, index )=> {
      this.clientess.push(
        {_id:element._id, 
          nit:element.nit, 
          nombre:element.nombre,
          fechaCreacion:element.fechaCreacion,
          codigo:element.codigo,
          nombreCorto:element.nombreCorto
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
    this.empresa.nit ="";
    this.empresa.nombre ="";
    this.empresa.codigo ="";
    this.empresa.nombreCorto ="";
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
    this.empresa._id = identificador._id
    this.empresa.nit = identificador.nit;
    this.empresa.nombre = identificador.nombre;
    this.empresa.codigo = identificador.codigo;
    this.empresa.nombreCorto = identificador.nombreCorto;
    this.empresa.fechaCreacion = identificador.fechaCreacion;
    this.empresa.fechaModificacion = new Date();
    this.mensajeCargarActualizar();
  }

  onDelete(identificador){
    const repu = this.clientess;
    const resp = confirm("Estas seguro de eliminar la empresa");
    if(resp){
      this.empresaService.deleteRol(identificador)
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
    if(this.empresa.nit == "" || this.empresa.nombre == "" 
      || this.empresa.codigo == "" || this.empresa.nombreCorto == ""){

        this.mensajeCamposVacios();
        console.log("campos vacios" + 
        this.empresa.nit + this.empresa.nombre + this.empresa.codigo + this.empresa.nombreCorto);

      } else {
        console.log(this.empresa);
        this.empresaService.updateRol(this.empresa)
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
  saveEmpresa(){
    if(this.empresa.nit == null || this.empresa.nombre == null 
      || this.empresa.codigo == null || this.empresa.nombreCorto == null){

      this.mensajeCamposVacios();
      console.log("campos vacios" + 
      this.empresa.nit + this.empresa.nombre + this.empresa.codigo + this.empresa.nombreCorto);

    } else {
      console.log(this.empresa);

      let sendCliente = {
        nit:this.empresa.nit, 
        nombre:this.empresa.nombre, 
        fechaModificacion: "16/01/2020",
        codigo:this.empresa.codigo, 
        nombreCorto:this.empresa.nombreCorto}

      this.empresaService.addRol(sendCliente)
      .subscribe(empresa =>{

        this.response = empresa;
        console.log("se guardaron los datos");
        console.log(this.response);
        this.mensajeGuardar();
        this.limpiarCampos();

      });
    }
  }


}
