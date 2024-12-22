import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureCheckComponent } from './feature-check.component';

const routes: Routes = [{ path: '', component: FeatureCheckComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureCheckRoutingModule { }
