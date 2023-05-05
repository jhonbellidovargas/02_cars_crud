import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    // CARS_SEED;
    // BRANDS_SEED;
    this.brandsService.fillBrandsWithSeed(BRANDS_SEED);
    this.carsService.fillCarsWithSeed(CARS_SEED);
    return 'Seed completed';
  }
}
