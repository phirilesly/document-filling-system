import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { FinanceDetailsComponent } from './details/details.component';
import { FinanceComponent } from './finance.component';
import { FinanceListComponent } from './list/list.component';
import { financeRoutes } from './finance-routing.module';
import { FinanceCardComponent } from './card/card.component';
import { FuseCardModule } from '@fuse/components/card';



@NgModule({
  declarations: [
    FinanceComponent,
    FinanceDetailsComponent,
    FinanceListComponent,
    FinanceCardComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule.forChild(financeRoutes),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    SharedModule,
    FuseCardModule,
  ]
})
export class FinanceModule { }



