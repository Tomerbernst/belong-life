import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryListItem } from '../models/country-list-item';

const baseUrl = 'https://restcountries.com/v3.1/all';

@Injectable({
    providedIn: 'root'
  })


  export class SearchCountryService {

    constructor(private http: HttpClient){
    }

    getCountry(): Observable<any>{
        return this.http.get<any>(baseUrl);
    }
  }
