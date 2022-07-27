import { ProcurementListComponent } from './list/list.component';
import { ProcurementDetailsComponent } from './details/details.component';
import { ProcurementCardComponent } from './card/card.component';
import { ProcurementComponent } from './procurement.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { procurementRoutes } from './procurement-routing.module';



@NgModule({
  declarations: [
    ProcurementComponent,
    ProcurementCardComponent,
    ProcurementDetailsComponent,
    ProcurementListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(procurementRoutes),
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
export class ProcurementModule { }
