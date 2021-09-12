import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AssetService } from '../shared/asset.service';


@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})


export class AddAssetComponent implements OnInit  {

  successMessage: string ='';
  addAssetForm: FormGroup ;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private assetService: AssetService) {
    this.addAssetForm = this.fb.group({
      assetName: ['', Validators.required],
      assetCategory: ['', Validators.required],
      dateOfPurchase: ['', [Validators.required, validateDateOfPurchase]],
      assetCost: ['', Validators.required],
      assetDescription: ['', [Validators.required, Validators.maxLength(50)]]
    });
    
  }

  ngOnInit() {

   
    // Add specified validators
  }

  


  /*
It should invoke addAsset() method of AssetService by passing addAssetForm object as a parameter.
The success callback should populate the successMessage with the message in response
*/

addAsset() {
  this.submitted = true;
    // stop here if form is invalid
    if (this.addAssetForm.invalid) {
        return;
    }

    this.assetService.addAsset(this.addAssetForm.value).subscribe(data => {
      this.successMessage=data.message;
    })
    
    }
}


/*
  Add Custom Validation for dateOfPurchase
*/
function validateDateOfPurchase(c: FormControl){
  let currentDateTime = new Date();
  currentDateTime.setHours(0,0,0,0);
  let selectedDate =new Date(c.value);
  selectedDate.setHours(0,0,0,0);

  return currentDateTime>=selectedDate ? null : {
    dateInvalid: {
        message: "Invalid Date selected!"
    }
};
}


