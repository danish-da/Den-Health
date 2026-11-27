import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose',
  imports: [CommonModule],
  templateUrl: './why-choose.html',
  styleUrl: './why-choose.scss'
})
export class WhyChooseComponent {
  reasons = [
    { icon: '🏅', title: 'Certified Quality', desc: 'All products are ISO 9001 and CE certified, meeting international medical safety standards.' },
    { icon: '💰', title: 'Competitive Pricing', desc: 'Direct manufacturer relationships allow us to offer the best prices, especially on bulk orders.' },
    { icon: '🚚', title: 'Reliable Delivery', desc: 'Nationwide logistics network ensures timely delivery — even for urgent or large-volume orders.' },
    { icon: '🤝', title: 'Dedicated Support', desc: 'Our team provides end-to-end support from product selection to after-sales service.' },
  ];
}
