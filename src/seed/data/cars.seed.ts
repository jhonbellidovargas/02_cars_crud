import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
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
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'Model 3',
    year: 2018,
    price: 80000,
    img: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-3-hero-social.jpg',
  },
];
