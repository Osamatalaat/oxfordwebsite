import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactusService } from '../../core/services/contactus.service';
import L from 'leaflet';

const iconRetinaUrl = 'assets/images/marker-3d.svg';
const iconUrl = 'assets/images/marker-icon.png';
const shadowUrl = 'assets/images/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-contactUs',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.css'],
  standalone: false,
})
export class ContactUsComponent implements AfterViewInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess: boolean | null = null;
  submitMessage: string | null = null;

  constructor(private fb: FormBuilder , private contactService: ContactusService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      consent: [false, Validators.requiredTrue],
    });
  }


  //map
   ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map').setView([51.755, -1.258], 15); // Coordinates of Oxford

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([51.755, -1.258]).addTo(map);
    marker.bindPopup('Wellington Square, Oxford OX1 2JD').openPopup();
  }

  getFormControl(name: string) {
    return this.contactForm.get(name);
  }

   onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = null;
    this.submitSuccess = null;

    const formData = this.contactForm.value;

    this.contactService.submitContact(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = 'Your message has been sent successfully!';
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitSuccess = false;
        this.submitMessage = 'Failed to send your message. Please try again.';
      },
    });
  }
}
