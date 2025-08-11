import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  http = inject(HttpClient);



 constructor() {}
  private accountsUrl = 'assets/data/accounts.json'; // Path to your JSON file

  validateLogin(email: string, password: string): Observable<string | null> {
    return this.http.get<Account[]>(this.accountsUrl).pipe(
      map((accounts) => {
        const account = accounts.find(
          (a) => a.email === email && a.password === password
        );
        return account ? account.role : null;
      })
    );
  }
}

