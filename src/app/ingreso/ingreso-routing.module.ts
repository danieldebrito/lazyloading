import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';

const routes: Routes = [

      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoRoutingModule { }
