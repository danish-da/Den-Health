import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  form = { name: '', email: '', phone: '', company: '', product: '', message: '' };
  submitted = false;

  productTypes = [
    'Latex Gloves',
    'Bouffant Cap',
    'Wet Wipes',
    'Hand Sanitizers',
    'Shoe Covers',
    'Waste Disposal Bags',
    'Infrared Thermometers',
    'Other'
  ];

  onSubmit() {
    this.submitted = true;
    setTimeout(() => this.submitted = false, 4000);
    this.form = { name: '', email: '', phone: '', company: '', product: '', message: '' };
  }
}
