import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Car } from './car';

//ng g c name -it -is
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  cars: Observable<Car[]> | undefined;
  readonly ROOT_URL = "http://localhost:4200/api/"
  //posts: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cars = this.http.get<Car[]>(this.ROOT_URL + 'vehicules');
   // this.cars.forEach(element => console.log(element));
    //console.log(this.cars);
  }

}
