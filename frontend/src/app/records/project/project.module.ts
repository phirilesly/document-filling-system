import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { ProjectDetailsComponent } from './details/details.component';
import { ProjectListComponent } from './list/list.component';
import { projectRoutes } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectCardComponent } from './card/card.component';
import { FuseCardModule } from '@fuse/components/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectComponent,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
   
    RouterModule.forChild(projectRoutes),
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
export class ProjectModule { }


