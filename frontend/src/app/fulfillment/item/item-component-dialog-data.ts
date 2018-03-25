import { ItemComponentMode } from './item-component-mode.enum';
import { Item } from './../models/item';

export class ItemComponentDialogData {
  constructor(public mode: ItemComponentMode, public item: Item = null) {}
}