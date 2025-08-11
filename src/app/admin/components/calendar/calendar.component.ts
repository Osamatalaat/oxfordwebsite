import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../core/services/event.service';
import { CalendarEvent } from '../../../core/models/CalendarEvent';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: false
})
export class CalendarComponent implements OnInit {
  events: CalendarEvent[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
