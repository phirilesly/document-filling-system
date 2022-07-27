import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { humanresourcesRoutes } from './humanresources-routing.module';
import { HumanresourcesListComponent } from './list/list.component';
import {  HumanresourcesDetailsComponent } from './details/details.component';
import {  HumanresourcesCardComponent } from './card/card.component';
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
import { SharedModule } from 'app/shared/shared.module';
import { HumanresourcesComponent } from './humanresources.component';


@NgModule({
  declarations: [
    HumanresourcesListComponent,
    HumanresourcesDetailsComponent,
    HumanresourcesCardComponent,
    HumanresourcesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(humanresourcesRoutes),
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
    SharedModule
  ]
})
export class HumanresourcesModule { }
