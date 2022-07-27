import { Route, RouterModule, Routes } from '@angular/router';
import { SchoolDetailsComponent } from './details/details.component';
import { SchoolListComponent } from './list/list.component';
import { SchoolComponent } from './school.component';
import { CanDeactivateFileManagerDetails } from './school.guards';
import { FileManagerFolderResolver, FileManagerItemResolver, FileManagerItemsResolver } from './school.resolver';

export const schoolRoutes: Route[] = [
  {
      path     : '',
      component: SchoolComponent,
      children : [
          {
              path    : 'folders/:folderId',
              component: SchoolListComponent,
              resolve : {
                  item: FileManagerFolderResolver
              },
              children: [
                  {
                      path         : 'details/:id',
                      component    : SchoolDetailsComponent,
                      resolve      : {
                          item: FileManagerItemResolver
                      },
                      canDeactivate: [CanDeactivateFileManagerDetails]
                  }
              ]
          },
          {
              path     : '',
              component: SchoolListComponent,
              resolve  : {
                  items: FileManagerItemsResolver
              },
              children : [
                  {
                      path         : 'details/:id',
                      component    : SchoolDetailsComponent,
                      resolve      : {
                          item: FileManagerItemResolver
                      },
                      canDeactivate: [CanDeactivateFileManagerDetails]
                  }
              ]
          }
      ]
  }
];

