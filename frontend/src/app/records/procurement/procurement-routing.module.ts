import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProcurementCardComponent } from './card/card.component';
import { ProcurementDetailsComponent } from './details/details.component';
import { ProcurementListComponent } from './list/list.component';
import { CanDeactivateProcurementDetails } from './procurement.guards';
import { ProcurementFolderResolver, ProcurementItemResolver } from './procurement.resolver';


export const procurementRoutes: Route[] = [
  {
      path: '',
      component: ProcurementCardComponent,
  },
  {
      path: 'procurement/:id',
      component: ProcurementListComponent,
      resolve: {
          item: ProcurementFolderResolver,
      },
      children: [
          {
              path: 'details/:id',
              component: ProcurementDetailsComponent,
              resolve: {
                  item: ProcurementItemResolver,
              },
              canDeactivate: [CanDeactivateProcurementDetails],
          },
          {
            path    : 'folders/:folderId',
            component: ProcurementListComponent,
            resolve : {
                item: ProcurementFolderResolver
            },
  }
      ],
  },
];
