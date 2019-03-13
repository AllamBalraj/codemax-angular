import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InventoryService} from '../../services/inventory.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  modelForm: FormGroup;
  submitted: boolean;
  manufacturers_name: any = [];

  constructor(private formBuilder: FormBuilder,
              public inventoryService: InventoryService,
              public router: Router) { }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      model_name: ['', Validators.required],
      manufacturer_id: ['', Validators.required]
    });
    this.inventoryService.getManufacturers()
      .pipe(map(result => result))
      .subscribe((data: any) => {
        this.manufacturers_name = data.data;
      });
  }

  get f() { return this.modelForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.modelForm.invalid) {
      return;
    }

    this.inventoryService.saveModel(this.modelForm.value).subscribe((data: any) => {
      if (data.status == 'success') {
        this.router.navigate(['/']);
      }
    });
  }

}
