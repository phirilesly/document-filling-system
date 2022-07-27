import { MinistryComponent } from './ministry.component';
import { MinistryListComponent } from './list/list.component';
import { MinistryDetailsComponent } from './details/details.component';
import { MinistryCardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ministryRoutes} from './ministry-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';


@NgModule({
  declarations: [
    MinistryCardComponent,
    MinistryDetailsComponent,
    MinistryListComponent,
    MinistryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ministryRoutes),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    FuseCardModule,
  
  ]
})
export class MinistryModule { }
