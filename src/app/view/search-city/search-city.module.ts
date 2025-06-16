import { NgModule } from '@angular/core';
import { SearchCityPageRoutingModule } from './search-city-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchCityPage } from './search-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCityPageRoutingModule
  ],
  declarations: [SearchCityPage]
})
export class SearchCityPageModule {}
