import { City } from "src/app/domain/entities/city.model";
import { CityRepository } from "src/app/domain/services/protocols/city-repository"
import { cities } from "./br-cities";

export class LocalCityRepository extends CityRepository {
    
    async getAll(): Promise<City[]> {
        return this.toCollection(cities);
    }
    
    private toEntity(data: any): City {
        return {
            id: data.id,
            name: data.nome,
            state: data.estado.nome,
            coords: {
                latitude: data.latitude,
                longitude: data.longitude
            }
        }
    }

    private toCollection(data: any[]): City[] {
        return data.map(
            (dataItem: any) => this.toEntity(dataItem)
        )
    }

}