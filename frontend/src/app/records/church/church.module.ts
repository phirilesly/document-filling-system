import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ChurchComponent } from './church.component';
import { ChurchDetailsComponent } from './details/details.component';
import { ChurchListComponent } from './list/list.component';
import { churchRoutes } from './church-routing.module';
import { CardComponent } from './card/card.component';
import { FuseCardModule } from '@fuse/components/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    ChurchComponent,
      ChurchDetailsComponent,
      ChurchListComponent,
      CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(churchRoutes),
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
export class ChurchModule { }

