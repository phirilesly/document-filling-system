import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Item, Items } from 'app/shared/file-manager.types';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProvinceService } from '../province.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ProvinceListComponent implements OnInit {

  @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;
  drawerMode: 'side' | 'over';
  selectedItem: Item;
  items: Items;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
      private _activatedRoute: ActivatedRoute,
      private _changeDetectorRef: ChangeDetectorRef,
      private _router: Router,
      private _fileManagerService: ProvinceService,
      private _fuseMediaWatcherService: FuseMediaWatcherService
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
      // Get the items
      this._fileManagerService.items$
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((items: Items) => {
              this.items = items;

              // Mark for check
              this._changeDetectorRef.markForCheck();
          });

      // Get the item
      this._fileManagerService.item$
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((item: Item) => {
              this.selectedItem = item;

              // Mark for check
              this._changeDetectorRef.markForCheck();
          });

      // Subscribe to media query change
      this._fuseMediaWatcherService.onMediaQueryChange$('(min-width: 1440px)')
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((state) => {

              // Calculate the drawer mode
              this.drawerMode = state.matches ? 'side' : 'over';

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
   * On backdrop clicked
   */
  onBackdropClicked(): void
  {
      // Go back to the list
      this._router.navigate(['./'], {relativeTo: this._activatedRoute});

      // Mark for check
      this._changeDetectorRef.markForCheck();
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
