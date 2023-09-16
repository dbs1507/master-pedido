import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InserirPedidoComponent } from './inserir-pedido/inserir-pedido.component';
import { PesquisarPedidoComponent } from './pesquisar-pedido/pesquisar-pedido.component';
import { ModalVisualizarPedidoComponent } from './modal-visualizar-pedido/modal-visualizar-pedido.component';

@NgModule({
  declarations: [
    InserirPedidoComponent,
    PesquisarPedidoComponent,
    ModalVisualizarPedidoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PedidoModule { }