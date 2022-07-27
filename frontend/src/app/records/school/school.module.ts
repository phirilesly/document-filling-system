import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SchoolComponent } from './school.component';
import { SchoolDetailsComponent } from './details/details.component';
import { SchoolListComponent } from './list/list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { schoolRoutes } from './school-routing.module';


@NgModule({
  declarations: [
    SchoolDetailsComponent,
    SchoolListComponent,
    SchoolComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(schoolRoutes),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    SharedModule
  ]
})
export class SchoolModule { }


