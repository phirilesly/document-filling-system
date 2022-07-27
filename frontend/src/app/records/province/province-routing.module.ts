import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CanDeactivateFileManagerDetails } from '../school/school.guards';
import { ProvinceCardComponent } from './card/card.component';
import { ProvinceDetailsComponent } from './details/details.component';
import { ProvinceListComponent } from './list/list.component';
import { ProvinceFolderResolver, ProvinceItemResolver } from './province.resolver';

export const provinceRoutes: Route[] = [
  {
      path: '',
      component: ProvinceCardComponent,
  },
  {
      path: 'province/:id',
      component: ProvinceListComponent,
      resolve: {
          item: ProvinceFolderResolver,
      },
      children: [
          {
              path: 'details/:id',
              component: ProvinceDetailsComponent,
              resolve: {
                  item: ProvinceItemResolver,
              },
              canDeactivate: [CanDeactivateFileManagerDetails],
          },
          {
            path    : 'folders/:folderId',
            component: ProvinceListComponent,
            resolve : {
                item: ProvinceFolderResolver
            },
  }
      ],
  },
];

