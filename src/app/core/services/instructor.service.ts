import { Injectable } from '@angular/core';
import { Instructor } from '../models/instructor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) {}

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>('assets/data/instructors.json');
  }

}
