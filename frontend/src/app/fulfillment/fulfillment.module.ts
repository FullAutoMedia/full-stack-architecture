import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { FulfillmentRoutingModule } from './fulfillment-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemService } from './item.service';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FulfillmentRoutingModule
  ],
  declarations: [ItemListComponent, DashboardComponent, ItemComponent],
  providers: [ItemService],
  entryComponents: [ ItemComponent ]
})
export class FulfillmentModule { }