import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchCityService } from './domain/services/search-city.service';
import { LocalCityRepository } from './data/local/local-city-repository';

const createSearchCityService = () => {
  return new SearchCityService(new LocalCityRepository())
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: SearchCityService, useFactory: createSearchCityService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
