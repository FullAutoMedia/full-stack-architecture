import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Item } from './../models/item';
import { ItemService } from './../item.service';
import { ItemComponent } from './../item/item.component';
import { ItemComponentDialogData } from './../item/item-component-dialog-data';
import { ItemComponentMode } from './../item/item-component-mode.enum';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  displayedColumns = [
        'name',
        'actions'
  ];
  dataSource = new MatTableDataSource();

  constructor(private itemService: ItemService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getItems();
  }

  addItem() {
    let dialogRef = this.dialog.open(ItemComponent, {
      data: new ItemComponentDialogData(ItemComponentMode.Add)
    });

    dialogRef.afterClosed().subscribe(() => this.getItems());
  }

  editItem(item: Item) {
    let dialogRef = this.dialog.open(ItemComponent, {
      data: new ItemComponentDialogData(ItemComponentMode.Update, item)
    });

    dialogRef.afterClosed().subscribe(() => this.getItems());
  }

  deleteItem(item: Item) {    
    this.itemService.delete(item).subscribe(() => this.getItems());
  }

  private getItems() {
    this.itemService.get().subscribe(items => this.dataSource.data = items);
  }
}