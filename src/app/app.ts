import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { AboutComponent } from './components/about/about';
import { NonmedicalComponent } from './components/nonmedical/nonmedical';
import { WhyChooseComponent } from './components/why-choose/why-choose';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, ServicesComponent, AboutComponent, NonmedicalComponent, WhyChooseComponent, ContactComponent, FooterComponent],
  template: `
    <app-navbar />
    <app-hero />
    <app-services />
    <app-about />
    <app-nonmedical />
    <app-why-choose />
    <app-contact />
    <app-footer />
  `,
  styles: [`:host { display: block; }`]
})
export class App {}
