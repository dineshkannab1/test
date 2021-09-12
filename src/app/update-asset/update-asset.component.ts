import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetService } from '../shared/asset.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  data: any;
  successMessage: string ='';
  updateAssetForm: FormGroup;
  assetId: any;
  submitted: boolean = false;
  sub: any;
  constructor(private assetService: AssetService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.updateAssetForm = this.fb.group({
      updateField: ['', Validators.required],
      updateValue: ['', Validators.required]
    });

    this.assetId=this.route.snapshot.params['assetId'];
    this.assetId = this.route.params.subscribe(params => {
      

    });
    var url = window.location.pathname;
      this.assetId = url.substring(url.lastIndexOf('/') + 1);

      console.log(this.assetId)
  }
  
  ngOnInit() {

    // Add specified validators
  }


  /*
It should invoke updateAsset() method of AssetService by passing assetId and 
the value to be updated.
   Example:updateAsset(1001,{"assetName":"Dell"})
The success callback should populate the successMessage with the message in response
*/

get f() { 
  
  return this.updateAssetForm.controls; }

  updateAsset() {
  this.submitted = true;
    // stop here if form is invalid
    if (this.updateAssetForm.invalid) {
        return;
    }

    this.assetService.updateAsset(this.assetId,this.updateAssetForm.value.updateField).subscribe(data => {
      this.successMessage=data.message;
    })
    
    }

}


