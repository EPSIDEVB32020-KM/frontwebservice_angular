import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
//import { CARS } from './mock-cars';
@Injectable({
  providedIn: 'root',
})
export class CarService {

  configUrl = 'http://host.docker.internal:8484/vehicules/';
  configUrl2 = 'http://localhost:8089/vehicules';
  posts: any;
  car: Car | undefined;
  results: string[] | undefined;

  constructor(private http: HttpClient) { console.log(this.http); }

  ngOnInit(): void {

  }

  getCars(): void {
    this.posts = this.http.get(this.configUrl2);
  }
}
