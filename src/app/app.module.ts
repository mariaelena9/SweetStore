import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/pages/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MainComponent } from './components/pages/main/main.component';
import { LoginComponent } from './components/forms/login/login.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { Page404Component } from './components/pages/page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { DulcesComponent } from './components/pages/dulces/dulces.component';
import { ModaldulcesComponent } from './components/modaldulces/modaldulces.component';
import { ListDulcesComponent } from './components/list-dulces/list-dulces.component';
import { FilterPipe } from './pipes/filter.pipe';

import { FilterListPipe } from './pipes/filter-list.pipe';
import { FilterListTPipe } from './pipes/filter-list-t.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    MainComponent,
    LoginComponent,
    ClientRegisterComponent,
    Page404Component,
    DulcesComponent,
    ModaldulcesComponent,
    ListDulcesComponent,
    FilterPipe,
    FilterListPipe,
    FilterListTPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
