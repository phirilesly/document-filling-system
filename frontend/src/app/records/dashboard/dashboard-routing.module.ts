import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './dashboard.resolver';

export const dashboardRoutes: Route[] = [
  {
      path     : '',
      component: DashboardComponent,
      resolve  : {
          data: DashboardResolver
      }
  }
];
