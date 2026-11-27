import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss'
})
export class AppointmentComponent {
  form = { name: '', email: '', phone: '', service: '', date: '', message: '' };
  submitted = false;

  services = ['General Checkup', 'Teeth Cleaning', 'Cosmetic Dentistry', 'Orthodontics', 'Dental Implants', 'Oral Surgery', 'Pediatric Dentistry', 'Emergency Care'];

  onSubmit() {
    this.submitted = true;
    setTimeout(() => this.submitted = false, 4000);
    this.form = { name: '', email: '', phone: '', service: '', date: '', message: '' };
  }
}
