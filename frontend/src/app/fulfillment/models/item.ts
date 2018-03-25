export class Item {
    id: number;
    name: string = '';
  
    constructor(init?: Partial<Item>) {
      Object.assign(this, init);
    }
  }