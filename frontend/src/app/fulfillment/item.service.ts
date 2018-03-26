import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Item } from './models/item';

@Injectable()
export class ItemService {
  private readonly api = 'http://localhost:3000/api/v1/items';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Item[]>(this.api);
  }

  add(item: Item) {
    try {
      this.assertItemValid(item, false);

      return this.http.post(this.api, item);
    } catch(err) {     
      return Observable.throw(err);      
    }
  }

  update(item: Item) {
    try {
      this.assertItemValid(item, true);

      return this.http.put(this.api, item);
    } catch(err) {
      return Observable.throw(err);
    }
  }

  delete(item: Item): Observable<any> { 
    try {
      if (!item.id) {
        throw new Error('Item Id is not valid');
      }

      return this.http.delete(this.api + '/' + item.id);
    } catch (err) {
      return Observable.throw(err);
    }
  }

  private assertItemValid(item: Item, validateId: boolean = false): void {
    const idValid: boolean = validateId ? this.validateItemName(item) : true;
    const nameValid: boolean = this.validateItemName(item);

    if (!idValid || !nameValid) {
      throw new Error('Item is not valid');
    }
  }

  private validateItemId(item: Item) : boolean {
    return item.id ? true : false;
  }

  private validateItemName(item: Item): boolean {
    return item.name
      && item.name.length > 4;
  }
}