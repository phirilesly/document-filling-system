import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { MinistryCardComponent } from './card/card.component';
import { MinistryDetailsComponent } from './details/details.component';
import { MinistryListComponent } from './list/list.component';
import { CanDeactivateMinistryDetails } from './ministry.guards';
import { MinistryFolderResolver, MinistryItemResolver } from './ministry.resolver';

export const ministryRoutes: Route[] = [
  {
      path: '',
      component: MinistryCardComponent,
  },
  {
      path: 'ministry/:id',
      component: MinistryListComponent,
      resolve: {
          item: MinistryFolderResolver,
      },
      children: [
          {
              path: 'details/:id',
              component: MinistryDetailsComponent,
              resolve: {
                  item: MinistryItemResolver,
              },
              canDeactivate: [CanDeactivateMinistryDetails],
          },
          {
            path    : 'folders/:folderId',
            component: MinistryListComponent,
            resolve : {
                item: MinistryFolderResolver
            },
  }
      ],
  },
];

