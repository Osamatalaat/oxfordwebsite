import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEvent } from '../models/CalendarEvent';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'assets/data/events.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this.eventsUrl);
  }
}
