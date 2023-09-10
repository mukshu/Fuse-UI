import { Route } from '@angular/router';
import { ContractsComponent } from 'app/modules/admin/apps/contracts/contracts.component';
import { ContractsListComponent } from 'app/modules/admin/apps/contracts/list/contracts.component';
import { ContractsBrandsResolver, ContractsCategoriesResolver, ContractsProductsResolver, ContractsTagsResolver, ContractsVendorsResolver } from 'app/modules/admin/apps/contracts/contracts.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'contracts'
    },
    {
        path     : 'contracts',
        component: ContractsComponent,
        children : [
            {
                path     : '',
                component: ContractsListComponent,
                resolve  : {
                    brands    : ContractsBrandsResolver,
                    categories: ContractsCategoriesResolver,
                    products  : ContractsProductsResolver,
                    tags      : ContractsTagsResolver,
                    vendors   : ContractsVendorsResolver
                }
            }
        ]
        /*children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    tasks    : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            task     : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]*/
    }
];
