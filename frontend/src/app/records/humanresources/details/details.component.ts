import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { Item } from 'app/shared/file-manager.types';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HumanresourcesService } from '../humanresources.service';
import { HumanresourcesListComponent } from '../list/list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class HumanresourcesDetailsComponent implements OnInit {

  item : Item;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
      private _changeDetectorRef: ChangeDetectorRef,
      private _fileManagerListComponent: HumanresourcesListComponent,
      private _fileManagerService: HumanresourcesService
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Open the drawer
      this._fileManagerListComponent.matDrawer.open();

      // Get the item
      this._fileManagerService.item$
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((item: Item) => {

              // Open the drawer in case it is closed
              this._fileManagerListComponent.matDrawer.open();

              // Get the item
              this.item = item;

              // Mark for check
              this._changeDetectorRef.markForCheck();
          });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Close the drawer
   */
  closeDrawer(): Promise<MatDrawerToggleResult>
  {
      return this._fileManagerListComponent.matDrawer.close();
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }

}
