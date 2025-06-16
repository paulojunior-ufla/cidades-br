import { NgModule } from '@angular/core';
import { SearchCityPageRoutingModule } from './search-city-routing.module';

import { SharedModule } from '../shared/shared.module';
import { SearchCityPage } from './search-city.page';

@NgModule({
  imports: [
    SharedModule,
    SearchCityPageRoutingModule
  ],
  declarations: [SearchCityPage]
})
export class SearchCityPageModule {}
