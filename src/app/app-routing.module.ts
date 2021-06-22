import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { DulcesComponent } from './components/pages/dulces/dulces.component';
import { ListDulcesComponent } from './components/list-dulces/list-dulces.component';
import {AboutUsComponent} from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
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
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'sobre-nosotros',
    component: AboutUsComponent
  },
  {
    path: 'dulces',
    component: DulcesComponent
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
