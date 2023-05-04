import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'BMW',
      model: 'M3',
      year: 2015,
      price: 50000,
      img: 'https://www.bmwusa.com/content/dam/bmwusa/XModels/M/M3/2018/Showroom/1x1/2018-bmw-m3-sedan-showroom-1x1.png',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Supra',
      year: 2016,
      price: 60000,
      img: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/supra/1K3/1.png?bg=fff&fm=webp&w=930',
    },
    {
      id: uuid(),
      brand: 'Tesla',
      model: 'Model S',
      year: 2017,
      price: 70000,
      img: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new NotFoundException(
        `Car with id ${updateCarDto.id} does not match with ${id}`,
      );
    }
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = {
      ...car,
      ...updateCarDto,
      id,
    };
    return this.cars[index];
  }

  delete(id: string) {
    const index = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== index.id);
  }
}
