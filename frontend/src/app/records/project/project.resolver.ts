import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Item } from 'app/shared/file-manager.types';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectItemsResolver implements Resolve<any>
{
  /**
   * Constructor
   */
  constructor(private _fileManagerService: ProjectService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]>
  {
      return this._fileManagerService.getItems();
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectFolderResolver implements Resolve<any>
{
  /**
   * Constructor
   */
  constructor(
      private _router: Router,
      private _fileManagerService: ProjectService
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]>
  {
      return this._fileManagerService.getItems(route.paramMap.get('folderId'))
                 .pipe(
                     // Error here means the requested task is not available
                     catchError((error) => {

                         // Log the error
                         console.error(error);

                         // Get the parent url
                         const parentUrl = state.url.split('/').slice(0, -1).join('/');

                         // Navigate to there
                         this._router.navigateByUrl(parentUrl);

                         // Throw an error
                         return throwError(error);
                     })
                 );
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectItemResolver implements Resolve<any>
{
  /**
   * Constructor
   */
  constructor(
      private _router: Router,
      private _fileManagerService: ProjectService
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item>
  {
      return this._fileManagerService.getItemById(route.paramMap.get('id'))
                 .pipe(
                     // Error here means the requested task is not available
                     catchError((error) => {

                         // Log the error
                         console.error(error);

                         // Get the parent url
                         const parentUrl = state.url.split('/').slice(0, -1).join('/');

                         // Navigate to there
                         this._router.navigateByUrl(parentUrl);

                         // Throw an error
                         return throwError(error);
                     })
                 );
  }
}
