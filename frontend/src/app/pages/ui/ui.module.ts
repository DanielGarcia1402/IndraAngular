import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialAngularSelectModule } from 'material-angular-select';

import { ThemeModule } from 'theme';

import { ButtonsComponent } from './buttons';
import { CardsComponent } from './cards';
import { ColorsComponent } from './colors';
import { FormsComponent } from './forms';
import { ClientesComponent } from './clientes';
import { CategoriasComponent } from './categorias';
import { ProductosComponent } from './productos';
import { EmpresaComponent } from './empresa';
import { AgenteComponent } from './agente';
import { IconsComponent } from './icons';
import { RightSidebarModule } from './right-sidebar';
import { TablesComponent, TablesService } from './tables';
import { TypographyComponent } from './typography';
import { UIRoutingModule } from './ui-routing.module';
import { clientesService } from './clientes/clientesService';
import { categoriasService } from './categorias/categoriasService';
import { productosService } from './productos/productosService';
import { empresaService } from './empresa/empresaService';
import { agenteService } from './agente/agenteService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    ThemeModule,
    MaterialAngularSelectModule,
    RightSidebarModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    FormsComponent,
    ClientesComponent,
    CategoriasComponent,
    ProductosComponent,
    EmpresaComponent,
    AgenteComponent,
    IconsComponent,
    TypographyComponent,
    TablesComponent,
  ],
  providers: [
    TablesService,
    clientesService,
    categoriasService,
    productosService,
    empresaService,
    agenteService,
  ],
})
export class UIModule { }
