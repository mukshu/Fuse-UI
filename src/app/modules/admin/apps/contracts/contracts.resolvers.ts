import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContractsService } from 'app/modules/admin/apps/contracts/contracts.service';
import { ContractsBrand, ContractsCategory, ContractsPagination, ContractsProduct, ContractsTag, ContractsVendor } from 'app/modules/admin/apps/contracts/contracts.types';

@Injectable({
    providedIn: 'root'
})
export class ContractsBrandsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _contractsService: ContractsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContractsBrand[]>
    {
        return this._contractsService.getBrands();
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContractsCategoriesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _contractsService: ContractsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContractsCategory[]>
    {
        return this._contractsService.getCategories();
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContractsProductResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _contractsService: ContractsService,
        private _router: Router
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContractsProduct>
    {
        return this._contractsService.getProductById(route.paramMap.get('id'))
                   .pipe(
                       // Error here means the requested product is not available
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
export class ContractsProductsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _contractsService: ContractsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ pagination: ContractsPagination; products: ContractsProduct[] }>
    {
        return this._contractsService.getProducts();
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContractsTagsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _contractsService: ContractsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContractsTag[]>
    {
        return this._contractsService.getTags();
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContractsVendorsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _contractsService: ContractsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContractsVendor[]>
    {
        return this._contractsService.getVendors();
    }
}
