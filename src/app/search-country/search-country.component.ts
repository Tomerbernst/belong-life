import { Component, OnInit } from "@angular/core";
import * as Immutable from "immutable";
import { CountryListItem } from "../models/country-list-item";
import { SearchCountryService } from "./search-country.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-search-country",
  templateUrl: "./search-country.component.html",
  styleUrls: ["./search-country.component.scss"],
})
export class SearchCountryComponent implements OnInit {
  countryData: CountryListItem[] = [];
  countryList;

  constructor(private countryService: SearchCountryService) {}

  ngOnInit(): void {
    //let countryList: Immutable.List<CountryListItem>;

    this.countryService
      .getCountry()
      .pipe(
        map((res) => {
          res.map((value) => {
            this.countryData.push({
              id: value.cca2,
              name: value.name.common,
              svg: value.flags.svg,
              
            });
          });
          return this.countryData;
        })
      )
      .subscribe((res) => console.log(res));
  }
}
