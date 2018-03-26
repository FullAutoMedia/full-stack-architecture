import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ItemService } from './../item.service';
import { Item } from './../models/item';

import { ItemComponentDialogData } from './item-component-dialog-data';
import { ItemComponentMode } from './item-component-mode.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  action: string;
  mode: ItemComponentMode;
  item: Item;
  isItemValid: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ItemComponentDialogData, public dialogRef: MatDialogRef<ItemComponent>, private itemService: ItemService) { 
    this.mode = data.mode;
    this.action = ItemComponentMode[this.mode];

    if (this.mode == ItemComponentMode.Add) {
      this.item = new Item();
    } else {
      this.item = data.item;
    }
  }

  ngOnInit() { 
    
  }

  saveItem() {
    let save;
    if (this.mode == ItemComponentMode.Add) {
      save = this.itemService.add(this.item);
    } else {
      save = this.itemService.update(this.item);
    }

    save.subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {
        this.isItemValid = false;
      });
  }
}