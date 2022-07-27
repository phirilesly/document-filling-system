import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SchoolDetailsComponent } from "./details/details.component";



@Injectable({
    providedIn: 'root'
})
export class CanDeactivateFileManagerDetails implements CanDeactivate<SchoolDetailsComponent>
{
    canDeactivate(
        component: SchoolDetailsComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        // Get the next route
        let nextRoute: ActivatedRouteSnapshot = nextState.root;
        while ( nextRoute.firstChild )
        {
            nextRoute = nextRoute.firstChild;
        }

        // If the next state doesn't contain '/file-manager'
        // it means we are navigating away from the
        // file manager app
        if ( !nextState.url.includes('/file-manager') )
        {
            // Let it navigate
            return true;
        }

        // If we are navigating to another item...
        if ( nextState.url.includes('/details') )
        {
            // Just navigate
            return true;
        }
        // Otherwise...
        else
        {
            // Close the drawer first, and then navigate
            return component.closeDrawer().then(() => true);
        }
    }
}
