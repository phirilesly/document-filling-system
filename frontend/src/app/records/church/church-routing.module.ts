import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ChurchComponent } from './church.component';
import { CanDeactivateFileManagerDetails } from './church.guards';
import {
    FileManagerFolderResolver,
    FileManagerItemResolver,
    FileManagerItemsResolver,
} from './church.resolver';
import { ChurchDetailsComponent } from './details/details.component';
import { ChurchListComponent } from './list/list.component';

export const churchRoutes: Route[] = [
    {
        path: '',
        component: CardComponent,
    },
    {
        path: 'church/:id',
        component: ChurchListComponent,
        resolve: {
            item: FileManagerFolderResolver,
        },
        children: [
            {
                path: 'details/:id',
                component: ChurchDetailsComponent,
                resolve: {
                    item: FileManagerItemResolver,
                },
                canDeactivate: [CanDeactivateFileManagerDetails],
            },
            {
              path    : 'folders/:folderId',
              component: ChurchListComponent,
              resolve : {
                  item: FileManagerFolderResolver
              },
    }
        ],
    },

    // children : [
    //     {
    //         path    : 'folders/:folderId',
    //         component: ChurchListComponent,
    //         resolve : {
    //             item: FileManagerFolderResolver
    //         },
    //         children: [
    //             {
    //                 path         : 'details/:id',
    //                 component    : ChurchDetailsComponent,
    //                 resolve      : {
    //                     item: FileManagerItemResolver
    //                 },
    //                 canDeactivate: [CanDeactivateFileManagerDetails]
    //             }
    //         ]
    //     },
    //     {
    //         path     : '',
    //         component: ChurchListComponent,
    //         resolve  : {
    //             items: FileManagerItemsResolver
    //         },
    //         children : [
    //             {
    //                 path         : 'details/:id',
    //                 component    : ChurchDetailsComponent,
    //                 resolve      : {
    //                     item: FileManagerItemResolver
    //                 },
    //                 canDeactivate: [CanDeactivateFileManagerDetails]
    //             }
    //         ]
    //     }
    // ]
    // }
];
