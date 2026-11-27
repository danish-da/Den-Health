import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  products = [
    {
      icon: '🧤',
      title: 'Latex Gloves',
      desc: 'High-quality latex examination gloves offering superior tactile sensitivity and barrier protection. Available in S, M, L, XL — powder-free and sterile options for clinical and laboratory use.'
    },
    {
      icon: '🧢',
      title: 'Bouffant Cap',
      desc: 'Lightweight, breathable disposable bouffant caps for maintaining hygiene in operating theatres, cleanrooms, food processing, and healthcare environments. Available in bulk packs.'
    },
    {
      icon: '🧻',
      title: 'Wet Wipes',
      desc: 'Soft, pre-moistened disposable wet wipes for personal hygiene and surface cleaning. Gentle on skin, available in antibacterial and alcohol-free variants for medical and general use.'
    },
  ];
}
