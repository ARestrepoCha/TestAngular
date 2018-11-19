import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

export const APP_ROUTES: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'registro' }
];
