import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './body/body.component';
import { BodyDetailComponent } from './bodydetail/bodydetail.component';
import { ImageComponent } from './image/image.component';
import { PlayComponent } from './play/play.component';
import { TechnologyComponent } from './technology/technology.component';

const appRoutes: Routes = [
  {
    path: 'dashboard/:name',
    component: DashboardComponent

  },
  {
    path: 'future',
    component: ImageComponent
  },
  {
    path: 'apps',
    component: BodyComponent
  },
  {
    path: 'play',
    component: PlayComponent
  },
  {
    path: 'technologies',
    component: TechnologyComponent
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
