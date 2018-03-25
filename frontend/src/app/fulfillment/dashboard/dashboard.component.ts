import { Component, OnInit } from '@angular/core';

import { ItemService } from './../item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  itemCount: number;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.get().subscribe(items => this.itemCount = items.length);
  }
}