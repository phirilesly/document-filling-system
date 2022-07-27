import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HumanresourcesCardComponent } from './card/card.component';
import { HumanresourcesDetailsComponent } from './details/details.component';
import { CanDeactivateHumanResourcesDetails } from './humanresources.guards';
import { HumanResourcesFolderResolver, HumanResourcesItemResolver } from './humanresources.resolver';
import { HumanresourcesListComponent } from './list/list.component';

export const humanresourcesRoutes: Route[] = [
  {
      path: '',
      component: HumanresourcesCardComponent,
  },
  {
      path: 'humanresource/:id',
      component: HumanresourcesListComponent,
      resolve: {
          item: HumanResourcesFolderResolver,
      },
      children: [
          {
              path: 'details/:id',
              component: HumanresourcesDetailsComponent,
              resolve: {
                  item: HumanResourcesItemResolver,
              },
              canDeactivate: [CanDeactivateHumanResourcesDetails],
          },
          {
            path    : 'folders/:folderId',
            component: HumanresourcesListComponent,
            resolve : {
                item: HumanResourcesFolderResolver
            },
  }
      ],
  },
];
