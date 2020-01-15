import { CITY } from './area.model';

export const getProvinces = () => {
  return Object.keys(CITY);
};

export const getCitiesByProvince = (province: string) => {
  if (!province) {
    return [];
  }
  const cities = CITY[province];
  return Object.keys(cities);
};

export const getAreasByCity = (province: string, city: string) => {
  if (!province || !city || !isCityInProvince(city, province)) {
    return [];
  }
  return [...CITY[province][city]];
};

const isCityInProvince = (city: string, province: string) => {
  return CITY[province][city] != null;
};
