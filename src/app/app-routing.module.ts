import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './body/body.component';
import { BodyDetailComponent } from './bodydetail/bodydetail.component';

const appRoutes: Routes = [
  {
    path: 'dashboard/:name',
    component: DashboardComponent

  },
  {
    path: 'apps',
    component: BodyComponent
  },
  {
    path: 'detail/:name',
    component: BodyDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard/all',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
