import { Component } from '@angular/core';
import { AssetService } from '../shared/asset.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent {


  errorMessage: string='';
  assetId: string = '';
  assetDetails: any;


  constructor(private assetService: AssetService, private router: Router) {

    
   }


  /*
It should invoke getAssetDetails() method of AssetService by passing assetId as a parameter.
The success callback should populate the successMessage with the message in response
The error callback should populate the errorMessage with the message in response
*/
  viewAsset(assetId: any) {
    this.errorMessage="";
    this.assetService.getAssetDetails(assetId).subscribe(data => {
    this.assetDetails=data;
    },error=>{
      if(error.error.message=="Asset not found !"){
        this.errorMessage =error.error.message;
      }
    }
    
    )
    // code here
  }


  /*
It should navigate to /updateAsset/:assetId 
*/
  update(assestDetails :any) {
    this.router.navigateByUrl('/updateAsset/'+assestDetails.assetId)
    console.log(assestDetails.assetId)
    //  code here
  }

}
