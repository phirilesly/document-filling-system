import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<any>
{
  /**
     * Constructor
     */
   constructor(private _projectService: DashboardService)
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
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
   {
       return this._projectService.getData();
   }
}
