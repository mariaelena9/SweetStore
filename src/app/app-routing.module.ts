import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { ForgotPasswordComponent } from './components/forms/forgot-password/forgot-password.component';
import { DulcesComponent } from './components/pages/dulces/dulces.component';
import { ListDulcesComponent } from './components/list-dulces/list-dulces.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: ClientRegisterComponent
  },
  {
    path: 'admin/dulces',
    component: ListDulcesComponent
  },
  {
    path: 'dulces',
    component: DulcesComponent
  },
  {
    path: 'recuperar-contrasena',
    component: ForgotPasswordComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
