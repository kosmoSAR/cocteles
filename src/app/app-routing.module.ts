import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoctelesComponent } from './components/cocteles/cocteles.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  { path:'', component:AppComponent, children: [
    {path:'inicio', component:CoctelesComponent},
    {path:'', redirectTo:'inicio', pathMatch:'full'},
    {path:'detalles/:id', component:DetallesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
