import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { FooterComponent } from './footer/footer.component';


export const ELEWA_FOOTER_ROUTES: Route[] = [

  { path: '', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_FOOTER_ROUTES)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
