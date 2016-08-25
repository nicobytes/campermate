import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { DataService } from '../../providers/data';

@Component({
  templateUrl: 'build/pages/my-details/my-details.html',
})
export class MyDetailsPage {

  myDetailsForm: ControlGroup;

  constructor(
    private _navCtrl: NavController,
    private _formBuilder: FormBuilder,
    private _dataService: DataService
  ) {
    this.myDetailsForm = this._buildForm();
  }

  saveForm(): void{
    let data = this.myDetailsForm.value;
  }

  private _buildForm(){
    return this._formBuilder.group({
      carRegistration: [''],
      trailerRegistration: [''],
      trailerDimensions: [''],
      phoneNumber: [''],
      notes: ['']
    });
  }

}
