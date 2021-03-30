import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Car } from '../essai-detail/essai';
import { CarService } from '../card-detail/car-service';

@Component({
  selector: 'app-essai-detail',
  templateUrl: './essai-detail.component.html',
  styleUrls: ['./essai-detail.component.css']
})

export class EssaiDetailComponent implements OnInit {
  cars: Observable<Car[]> | undefined;
  readonly ROOT_URL = "http://localhost:4200/api/"
  //posts: any;
  constructor(carservice: CarService,private http: HttpClient) { }

  ngOnInit(): void {
    this.cars = this.http.get<Car[]>(this.ROOT_URL + 'vehicules');
  }

}
