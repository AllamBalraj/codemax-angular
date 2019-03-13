import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../../services/inventory.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inventory: any = [];

  constructor(public inventoryService: InventoryService,
              public router: Router) { }

  ngOnInit() {
    this.inventoryService.getInventory()
      .pipe(map(result => result))
      .subscribe((data: any) => {
        this.inventory = data.data;
        console.log(this.inventory);
      });
  }

  soldModel(model: any) {
    console.log(model);
    this.inventoryService.saveSoldModel(model)
      .pipe(map(result => result))
      .subscribe((data: any) => {
        this.inventory = data.data;
        console.log(this.inventory);
      });
  }

}
