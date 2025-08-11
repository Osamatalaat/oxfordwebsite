import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Notice } from '../models/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private jsonUrl = 'assets/data/notice.json';

  constructor(private http: HttpClient) {}

  getNotices(): Observable<Notice[]> {
    return this.http.get<Notice[]>(this.jsonUrl);
  }
}
