import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importar módulos compartidos y secundarios
import { HttpClientModule } from '@angular/common/http';
import { DeberesModule } from './deberes/deberes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, // Necesario para ejecutar la aplicación en el navegador
    BrowserAnimationsModule, // Para animaciones (PrimeNG lo requiere)
    AppRoutingModule, // Configuración de rutas principales
    HttpClientModule, // Para llamadas HTTP
    DeberesModule, // Importar tu módulo secundario
  ],
  providers: [], // Aquí puedes registrar servicios globales
  bootstrap: [], // Componente raíz que se carga al inicio
})
export class AppModule { }
