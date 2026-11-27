import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nonmedical',
  imports: [CommonModule],
  templateUrl: './nonmedical.html',
  styleUrl: './nonmedical.scss'
})
export class NonmedicalComponent {
  products = [
    {
      icon: '🧴',
      title: 'Hand Sanitizers',
      desc: 'WHO-formula alcohol-based hand sanitizers in 100ml, 500ml, and 5L bulk containers for offices, schools, and institutions.'
    },
    {
      icon: '👟',
      title: 'Shoe Covers',
      desc: 'Disposable non-slip shoe covers for cleanrooms, labs, food processing units, and visitor areas. Available in bulk packs.'
    },
    {
      icon: '🪣',
      title: 'Waste Disposal Bags',
      desc: 'Color-coded biohazard and general waste disposal bags compliant with medical waste management standards.'
    },
    {
      icon: '🌡️',
      title: 'Infrared Thermometers',
      desc: 'Non-contact infrared thermometers for quick, hygienic temperature screening at entry points of hospitals and offices.'
    },
  ];
}
