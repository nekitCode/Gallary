import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarousel } from '../models/carousel';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private jsonUrl = 'assets/back/carousel.json';

  constructor(private http: HttpClient) {}

  getImages(): Observable<ICarousel[]> {
    return this.http.get<ICarousel[]>(this.jsonUrl);
  }
}
