import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Personne } from './persone';
import { FormGroup, FormControl } from '@angular/forms';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styleUrls: ['./personne-detail.component.css']
})
export class PersonneDetailComponent implements OnInit {
pers_forms: any[] = [
  {
    "label_for": "inputId4",
    "label_text": "ID",
    "input_type": "number",
    "input_placeholder": "6",
  },
  {
    "label_for": "inputName4",
    "label_text": "Nom",
    "input_type": "text",
    "input_placeholder": "Mike",
  }
];
  //Les formcontrol declaration
  id = new FormControl('6'); // ou id = new FormControl('');
  name = new FormControl('The Mike');
 //affciher la valeur de x de n importe quel variable x
  log(x: any) {
    console.log(x);
  }
  //fonction pour set les valeur prise
  update_value_form() {
    this.id.setValue('8');
    this.name.setValue('Marina');
    //affectation des valeur
    this.person.id = this.id.value;
    this.person.name = this.name.value;
    //afficher 
    this.log(this.person);
  }
  //voir les changement dans la classe person
  see_change_person_value() {
    //affectation des valeur
    this.person.id = this.id.value;
    this.person.name = this.name.value;
    //afficher
    this.log(this.person);
  }
  //fonction pour supprimer une ligne de code
  supprimer(p_id: any): Observable<void>{
    //this.http.delete<Personne>(this.ROOT_URL + 'persons/supprimer', object);
    const p_url = this.ROOT_URL + 'persons/supprimer/' + p_id + '';
    console.log(p_url);
    //console.log(this.http.delete<void>(p_url).pipe(catchError(this.handleError)));
    const options = {
      params: new HttpParams().set('id', p_id.toLocaleString())
    };
    return this.http.delete<void>(p_url, options);
    //return this.http.delete<void>(p_url);
  }

  person: Personne = { id: this.id.value, name: this.name.value };
  persons: Observable<Personne[]> | undefined;
  readonly ROOT_URL = "http://localhost:4200/api/"
  //posts: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.persons = this.http.get<Personne[]>(this.ROOT_URL + 'persons');
    //console.log(this.favoriteColorControl);
  }

}
