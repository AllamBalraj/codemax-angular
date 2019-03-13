import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InventoryService} from '../../services/inventory.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  manufacturerForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
              public inventoryService: InventoryService,
              public router: Router) { }

  ngOnInit() {
    this.manufacturerForm = this.formBuilder.group({
      manufacturer_name: ['', Validators.required],
    });
  }

  get f() { return this.manufacturerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.manufacturerForm.invalid) {
      return;
    }

    this.inventoryService.saveManufacturer(this.manufacturerForm.value).subscribe((data: any) => {
      if (data.status == 'success') {
        this.router.navigate(['/']);
      }
    });
  }

}
