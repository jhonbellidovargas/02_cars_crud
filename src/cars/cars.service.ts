import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brans: 'BMW',
      model: 'M3',
      year: 2015,
      price: 50000,
      img: 'https://www.bmwusa.com/content/dam/bmwusa/XModels/M/M3/2018/Showroom/1x1/2018-bmw-m3-sedan-showroom-1x1.png',
    },
    {
      id: 2,
      brans: 'BMW',
      model: 'M5',
      year: 2016,
      price: 60000,
      img: 'https://www.bmwusa.com/content/dam/bmwusa/XModels/M/M5/2018/Showroom/1x1/2018-bmw-m5-sedan-showroom-1x1.png',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }
}
