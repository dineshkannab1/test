import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateGuard } from './shared/update.guard';

@NgModule({
  declarations: [
    AppComponent,
    AddAssetComponent,
    ViewAssetComponent,
    UpdateAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [
    UpdateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
