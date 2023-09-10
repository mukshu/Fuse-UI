import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Wms360Service } from 'app/modules/admin/dashboards/wms360/wms360.service';

@Injectable({
    providedIn: 'root'
})
export class Wms360Resolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _wms360Service: Wms360Service)
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
        return this._wms360Service.getData();
    }
}
