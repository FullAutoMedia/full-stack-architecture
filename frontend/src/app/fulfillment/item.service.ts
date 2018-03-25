import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './models/item';

@Injectable()
export class ItemService {
  private readonly api = 'http://localhost:3000/api/v1/items';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Item[]>(this.api);
  }

  add(item: Item) {
    return this.http.post(this.api, item);
  }

  update(item: Item) {
    return this.http.put(this.api, item);
  }

  delete(item: Item) { 
    return this.http.delete(this.api + '/' + item.id);
  }
}