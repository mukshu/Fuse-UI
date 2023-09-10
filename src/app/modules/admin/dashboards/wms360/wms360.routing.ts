import { Route } from '@angular/router';
import { Wms360Component } from 'app/modules/admin/dashboards/wms360/wms360.component';
import { Wms360Resolver } from 'app/modules/admin/dashboards/wms360/wms360.resolvers';

export const wms360Routes: Route[] = [
    {
        path     : '',
        component: Wms360Component,
        resolve  : {
            data: Wms360Resolver
        }
    }
];
