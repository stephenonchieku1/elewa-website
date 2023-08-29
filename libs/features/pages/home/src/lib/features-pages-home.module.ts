import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { ElementsFooterModule } from '@elewa-website/elements/footer';
@NgModule({
  imports: [CommonModule, HomeRoutingModule,ElementsFooterModule,ButtonsModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
