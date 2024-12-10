import { Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
export const routes: Routes = [
    {path: '',loadChildren:()=>import('./deberes/deberes.module').then(deb=>deb.DeberesModule)},
    {path: 'estudiante', component: EstudianteComponent},
    {path: '', redirectTo: '/', pathMatch: 'full' },
];
