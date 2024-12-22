import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FeatureCheckRoutingModule } from './feature-check-routing.module';
import { FeatureCheckComponent, } from './feature-check.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    FeatureCheckComponent
  ],
  imports: [
    CommonModule,
    FeatureCheckRoutingModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule
  ]
})
export class FeatureCheckModule { }
