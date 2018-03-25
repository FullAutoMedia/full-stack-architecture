import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './models/item';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('http://localhost:3000/api/v1/items');
  }

  add(item: Item) {
    // this.items.push(item);
    // console.log(this.itemsSubject.value);
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