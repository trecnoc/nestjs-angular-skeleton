import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sample } from '../models/sample.interface';

@Injectable({
  providedIn: 'root'
})
export class SampleMessageService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getMessage() {
    return this.http.get<Sample>('/api/sample');
  }
}
