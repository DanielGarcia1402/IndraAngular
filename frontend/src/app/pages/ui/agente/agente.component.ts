import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { agenteService } from './agenteService';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.scss'],
})
export class AgenteComponent implements OnInit {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') private readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') private readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') private readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') private readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') private readonly mdlCellTop = true;

 
  public response:any = [];
  public agentess:any = [];
  public empresass:any = [];
  public dni: String;
  public info:any = [];


  constructor(private agenteService : agenteService) {}

  //Action for the button
  btnAction:string;
  //Variables to store data
  agente = {_id:null, empresaId:null, codigoAgente:null, 
    nombreAgente:null, estado:null, fechaCreacion:null, fechaModificacion:null, nombreCorto:null};

  ngOnInit(): void {
    this.info.push("Guardar");
    this.cargarCategoria();
    this.agenteService.getRols().subscribe(
      res => {
        this.response = res;
        console.log(res);
        this.cargarTabla(this.response);
      },
      err => console.log(err)
    );
  }

  cargarCategoria(){
    this.agenteService.getEmpresas()
    .subscribe(res => {
      this.response = res;
      console.log("Empresas " + res);
      this.llenarSelectCate(this.response);
    });
  }

  llenarSelectCate(respuesta){
    respuesta.empresa.forEach((element, index )=> {
      this.empresass.push(
        {_id:element._id, 
          nombre:element.nombre
        });
    });
    console.log(this.empresass);
  }

  cargarTabla(respuesta){
    respuesta.agente.forEach((element, index )=> {
      this.agentess.push(
        {_id:element._id, 
          empresaId:element.empresaId,
          codigoAgente:element.codigoAgente,
          nombreAgente:element.nombreAgente,
          estado:element.estado,
          fechaCreacion:element.fechaCreacion,
          nombreCorto:element.nombreCorto
        });
    });
    console.log(this.agentess);
  }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  limpiarCampos(){
    this.agente.codigoAgente ="";
    this.agente.nombreAgente ="";
    this.agente.estado ="";
    this.agente.nombreCorto ="";
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
    this.agente._id               = identificador._id
    this.agente.empresaId         = identificador.empresaId;
    this.agente.codigoAgente      = identificador.codigoAgente;
    this.agente.nombreAgente      = identificador.nombreAgente;
    this.agente.estado            = identificador.estado;
    this.agente.fechaCreacion     = identificador.fechaCreacion;
    this.agente.fechaModificacion = new Date();
    this.agente.nombreCorto       = identificador.nombreCorto;
    this.mensajeCargarActualizar();
  }

  onDelete(identificador){
    const repu = this.agentess;
    const resp = confirm("Estas seguro de eliminar el agente ");
    if(resp){
      this.agenteService.deleteRol(identificador)
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

  onUpdate(identificador){
    console.log(identificador);
    this.info.push("Editar");
    this.cargarActualizar(identificador);
  }

  saveUpdate(){
    if(this.agente.empresaId == "" || this.agente.codigoAgente == "" 
      || this.agente.nombreAgente == "" || this.agente.estado == ""
      || this.agente.nombreCorto == ""){

        this.mensajeCamposVacios();
        console.log("campos vacios" + 
        this.agente.empresaId + this.agente.codigoAgente + this.agente.nombreAgente + this.agente.estado
       + this.agente.nombreCorto);

      } else {
        console.log(this.agente);
        this.agenteService.updateRol(this.agente)
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
  saveAgente(){
    if(this.agente.empresaId == null || this.agente.codigoAgente == null
      || this.agente.nombreAgente == null || this.agente.estado == null
      || this.agente.nombreCorto == null){

      this.mensajeCamposVacios();
      console.log("campos vacios" + 
      this.agente.empresaId + this.agente.codigoAgente + this.agente.nombreAgente + this.agente.estado
       + this.agente.nombreCorto);

    } else {
      console.log(this.agente);

      let sendAgente = {
        empresaId:this.agente.empresaId, 
        codigoAgente:this.agente.codigoAgente, 
        nombreAgente:this.agente.nombreAgente, 
        estado:this.agente.estado,
        fechaModificacion:"No",
        nombreCorto:this.agente.nombreCorto}

      this.agenteService.addRol(sendAgente)
      .subscribe(agente =>{

        this.response = agente;
        console.log("se guardaron los datos");
        console.log(this.response);
        this.mensajeGuardar();
        this.limpiarCampos();
      });
    }
  }


}
