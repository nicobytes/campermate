import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { DataService } from '../../providers/data';

@Component({
  templateUrl: 'build/pages/camp-details/camp-details.html',
})
export class CampDetailsPage {

  campDetailsForm: ControlGroup;

  constructor(
    private _navCtrl: NavController,
    private _formBuilder: FormBuilder,
    private _dataService: DataService
  ) {
    this.campDetailsForm = this._buildForm();
  }

  saveForm(): void{
    let data = this.campDetailsForm.value;
  }

  private _buildForm(){
    return this._formBuilder.group({
      gateAccessCode: ['', Validators.required],
      ammenitiesCode: ['', Validators.required],
      wifiPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      departure: ['', Validators.required],
      notes: ['', Validators.required]
    });
  }

}
