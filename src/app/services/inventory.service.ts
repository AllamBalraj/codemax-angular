import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(public http: HttpClient) { }

  public saveManufacturer(manufacturer: any) {
    return this.http.post('/codemax/store_manufacturer.php', manufacturer);
  }

  public getManufacturers(){
    return this.http.get('/codemax/get_manufacturers.php');
  }

  public saveModel(model: any) {
    return this.http.post('/codemax/store_model.php', model);
  }

  public getInventory() {
    return this.http.get('/codemax/get_inventory.php');
  }

  public saveSoldModel(model: any) {
    return this.http.post('/codemax/update_model.php', model);
  }
}
