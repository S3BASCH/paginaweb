import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { Pagina3Component } from './componentes/pagina3/pagina3.component';
import { Pagina4Component } from './componentes/pagina4/pagina4.component';
import { Pagina5Component } from './componentes/pagina5/pagina5.component';

const routes: Routes = [
  {
    path:'', component:Pagina1Component
  },
  {
    path:'login2',component:Pagina2Component
  },
  {
    path:'compras',component:Pagina3Component
  },
  {
    path:'carrito',component:Pagina4Component
  },
  {
    path:'factura',component:Pagina5Component
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
