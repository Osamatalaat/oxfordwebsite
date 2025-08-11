export interface CalendarEvent {
  id: number;
  title: string;
  start: string;   // ISO Date String e.g. "2025-08-15"
  end?: string;    // optional
  description?: string;
  color?: string;  // custom color for event
}
