import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing.module';
import { RestSolicitudService } from './services/rest-servicios.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RegistroComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true })
  ],
  providers: [RestSolicitudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
