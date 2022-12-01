import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DocCardComponent } from './doc-card/doc-card.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { CanDeactivateDocDetails } from './documents.guards';
import { DocumentsFolderResolver, DocumentsItemResolver } from './documents.resolver';




export const documentsRoutes: Route[] = [
    {
        path: '',
        component: DocCardComponent,
    },
    {
        path: 'documents/:id',
        component: DocListComponent,
        resolve: {
            item: DocumentsFolderResolver,
        },
        children: [
            {
                path: 'details/:id',
                component: DocDetailsComponent,
                resolve: {
                    item: DocumentsItemResolver,
                },
                canDeactivate: [CanDeactivateDocDetails],
            },
            {
              path    : 'folders/:folderId',
              component: DocListComponent,
              resolve : {
                  item: DocumentsFolderResolver
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
