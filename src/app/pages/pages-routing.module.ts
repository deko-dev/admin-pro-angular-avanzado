import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaOneComponent } from './grafica-one/grafica-one.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'grafica1',
        component: GraficaOneComponent
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
