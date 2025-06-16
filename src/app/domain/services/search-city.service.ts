import { City } from "../entities/city.model";
import { CityNotFoundError } from "../errors/city-not-found.error";
import { CityRepository } from "./protocols/city-repository";

export class SearchCityService {
    constructor(private readonly repo: CityRepository) { }

    async searchByName(name: string): Promise<City[]> {
        if (!name || name.trim().length < 3) {
            return [];
        }

        const allCities = await this.repo.getAll();

        const normalizedName = this.normalizeText(name);
        const filteredCities = allCities.filter(
            (city: City) => this.normalizeText(city.name).indexOf(normalizedName) > -1
        );

        if (filteredCities.length == 0) {
            throw new CityNotFoundError();
        }

        return filteredCities;
    }

    private normalizeText(text: string): string {
        return text
            .normalize('NFD')                  
            .replace(/[\u0300-\u036f]/g, '')   
            .toLowerCase();                    
    }
}