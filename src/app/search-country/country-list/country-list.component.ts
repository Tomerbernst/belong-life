import { Component, Input, OnInit } from '@angular/core';
import { CountryListItem } from 'src/app/models/country-list-item';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
@Input() countryData: CountryListItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
