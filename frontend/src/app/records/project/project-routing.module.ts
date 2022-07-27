import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FinanceCardComponent } from '../finance/card/card.component';
import { ProjectCardComponent } from './card/card.component';
import { ProjectDetailsComponent } from './details/details.component';
import { ProjectListComponent } from './list/list.component';
import {  CanDeactivateProjectDetails } from './project.guards';
import {  ProjectFolderResolver, ProjectItemResolver } from './project.resolver';

export const projectRoutes: Route[] = [
  
    {
        path: '',
        component: ProjectCardComponent,
    },
    {
        path: 'project/:id',
        component: ProjectListComponent,
        resolve: {
            item: ProjectFolderResolver,
        },
        children: [
            {
                path: 'details/:id',
                component: ProjectDetailsComponent,
                resolve: {
                    item: ProjectItemResolver,
                },
                canDeactivate: [CanDeactivateProjectDetails],
            },
            {
              path    : 'folders/:folderId',
              component: ProjectListComponent,
              resolve : {
                  item: ProjectFolderResolver
              },
    }
        ],
    },


//       path     : '',
//       component: ProjectComponent,
//       children : [
//           {
//               path    : 'folders/:folderId',
//               component: ProjectListComponent,
//               resolve : {
//                   item: FileManagerFolderResolver
//               },
//               children: [
//                   {
//                       path         : 'details/:id',
//                       component    : ProjectDetailsComponent,
//                       resolve      : {
//                           item: FileManagerItemResolver
//                       },
//                       canDeactivate: [CanDeactivateFileManagerDetails]
//                   }
//               ]
//           },
//           {
//               path     : '',
//               component: ProjectListComponent,
//               resolve  : {
//                   items: FileManagerItemsResolver
//               },
//               children : [
//                   {
//                       path         : 'details/:id',
//                       component    : ProjectDetailsComponent,
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
