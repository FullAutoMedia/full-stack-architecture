import { Routes } from '@angular/router';
import { FulfillmentModule } from './fulfillment/fulfillment.module'

export const appRoutes: Routes = [
    {
      path: 'fulfillment',      
      loadChildren: () => FulfillmentModule
    },
    {
      path: '',
      redirectTo: '/fulfillment',
      pathMatch: 'full'
    }
];