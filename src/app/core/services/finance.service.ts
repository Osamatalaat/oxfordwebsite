import { Injectable } from '@angular/core';
import { FinanceRecord } from '../models/financeRecord';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private jsonUrl = 'assets/data/finance.json';

  constructor(private http: HttpClient) {}

  getFinanceRecords(): Observable<FinanceRecord[]> {
    return this.http.get<FinanceRecord[]>(this.jsonUrl);
  }

}
