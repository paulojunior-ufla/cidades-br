import { Component, OnInit } from '@angular/core';
import { City } from '../../domain/entities/city.model';
import { SearchCityService } from '../../domain/services/search-city.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.page.html',
  styleUrls: ['./search-city.page.scss'],
})
export class SearchCityPage {

  errorMessage = null;
  cities: City[] = [];

  constructor(
    private readonly cityService: SearchCityService,
  ) { }

  async onSearch(query: string) {
    try {
      this.errorMessage = null;
      this.cities = await this.cityService.searchByName(query)
    } catch (error) {
      this.errorMessage = error.message
    }
  }

  selectCity(city: City) {
    if (!city || !city.coords) {
      return;
    }
    
    window.open(`https://www.google.com/maps?q=${city.coords.latitude},${city.coords.longitude}`, '_blank');
  }

}
