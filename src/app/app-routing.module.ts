import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from '../app/component/forecast/forecast.component';
import { HomeComponent } from '../app/component/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'forecast/:id', component: ForecastComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
