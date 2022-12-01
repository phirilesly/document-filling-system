import { DocumentsComponent } from './documents.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { DocCardComponent } from './doc-card/doc-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { FuseCardModule } from '@fuse/components/card';
import { documentsRoutes } from './documents-routing.module';



@NgModule({
  declarations: [
    DocCardComponent,
    DocDetailsComponent,
    DocListComponent,
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule.forChild(documentsRoutes),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    SharedModule,
    FuseCardModule,
  ]
})
export class DocumentsModule { }
