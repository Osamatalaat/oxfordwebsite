import { Injectable } from '@angular/core';
import { NewsItem } from '../models/news';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

private jsonUrl = 'assets/data/news.json';

  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.jsonUrl);
  }

  getNewsById(id: number): Observable<NewsItem | undefined> {
  return this.getNews().pipe(
    map((items) => items.find(item => item.id === id))
  );
}
}
