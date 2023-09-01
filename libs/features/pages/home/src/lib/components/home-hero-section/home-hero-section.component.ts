import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
@Component({
  selector: 'elewa-website-home-hero-section',
  standalone: true,
  imports: [CommonModule,TextsModule,AppHeaderModule],
  templateUrl: './home-hero-section.component.html',
  styleUrls: ['./home-hero-section.component.scss'],
})
export class HomeHeroSectionComponent {}
