export class CountryListItem {
  id: string;
  name: string;
  svg: string;

  constructor(id: string, name: string, svg: string){
    this.id = id;
    this.name = name;
    this.svg = svg;
  }
}
