import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FinanceCardComponent } from './card/card.component';
import { FinanceDetailsComponent } from './details/details.component';
import {  CanDeactivateFinanceDetails } from './finance.guards';
import {  FinanceFolderResolver, FinanceItemResolver } from './finance.resolver';
import { FinanceListComponent } from './list/list.component';

export const financeRoutes: Route[] = [
  
    {
        path: '',
        component: FinanceCardComponent,
    },
    {
        path: 'finance/:id',
        component: FinanceListComponent,
        resolve: {
            item: FinanceFolderResolver,
        },
        children: [
            {
                path: 'details/:id',
                component: FinanceDetailsComponent,
                resolve: {
                    item: FinanceItemResolver,
                },
                canDeactivate: [CanDeactivateFinanceDetails],
            },
            {
              path    : 'folders/:folderId',
              component: FinanceListComponent,
              resolve : {
                  item: FinanceFolderResolver
              },
    }
        ],
    },




//       path     : '',
//       component: FinanceComponent,
//       children : [
//           {
//               path    : 'folders/:folderId',
//               component: FinanceListComponent,
//               resolve : {
//                   item: FileManagerFolderResolver
//               },
//               children: [
//                   {
//                       path         : 'details/:id',
//                       component    : FinanceDetailsComponent,
//                       resolve      : {
//                           item: FileManagerItemResolver
//                       },
//                       canDeactivate: [CanDeactivateFileManagerDetails]
//                   }
//               ]
//           },
//           {
//               path     : '',
//               component: FinanceListComponent,
//               resolve  : {
//                   items: FileManagerItemsResolver
//               },
//               children : [
//                   {
//                       path         : 'details/:id',
//                       component    : FinanceDetailsComponent,
//                       resolve      : {
//                           item: FileManagerItemResolver
//                       },
//                       canDeactivate: [CanDeactivateFileManagerDetails]
//                   }
//               ]
//           }
//       ]
//   }
];