import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Item } from './models/item';

@Injectable()
export class ItemService {
  items: Observable<Item[]>;

  private itemsSubject: BehaviorSubject<Item[]>;
  private itemsCache: Item[];

  constructor() { 
    this.itemsSubject = new BehaviorSubject<Item[]>(null);
    this.items = this.itemsSubject.filter(items => items !== null);

    //testing

    this.itemsCache = [
      new Item({ id: 1, name: 'aaa'}),
      new Item({id: 2, name: 'Helium'}),
      new Item({id: 3, name: 'Lithium'}),
      new Item({id: 4, name: 'Beryllium'}),
      new Item({id: 5, name: 'Boron'}),
      new Item({id: 6, name: 'Carbon'})
    ];  

    this.itemsSubject.next(this.itemsCache);
  }

  add(item: Item) {
    // this.items.push(item);
    console.log(this.itemsSubject.value);
  }

  update(item: Item) {
    // const index = this.items.findIndex(item => item.id == item.id);
    // if (index > -1) {
    //   this.items[index] = item;
    // }
  }

  delete(item: Item) {
    // const index = this.items.findIndex(item => item.id == item.id);
    // if (index > -1) {
    //   this.items.splice(index, 1);
    // }
  }
}