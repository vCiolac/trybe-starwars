import { useState, useEffect } from 'react';
import { ColumnFilterType, PlanetType } from '../types';

function applyFilter(
  planet: PlanetType,
  column: string,
  comparison: string,
  value: number,
): boolean {
  const planetValue = parseFloat(planet[column as keyof PlanetType]);
  if (!Number.isNaN(planetValue)) {
    switch (comparison) {
      case 'maior que':
        return planetValue > value;
      case 'menor que':
        return planetValue < value;
      case 'igual a':
        return planetValue === value;
      default:
        return false;
    }
  }
  return false;
}

function applySearchFilter(planet: PlanetType, searchTerm: string): boolean {
  return planet.name.toLowerCase().includes(searchTerm.toLowerCase());
}

export function useFilter(
  data: PlanetType[],
  searchTerm: string,
  filtersToApply: ColumnFilterType | null,
) {
  const [filteredData, setFilteredData] = useState<PlanetType[]>(data);

  useEffect(() => {
    let newData = [...data];

    if (filtersToApply) {
      if (
        filtersToApply.column
        && filtersToApply.value !== ''
        && filtersToApply.comparison
      ) {
        const numValue = parseFloat(filtersToApply.value);
        if (!Number.isNaN(numValue)) {
          newData = newData.filter((planet) => applyFilter(planet, filtersToApply.column, filtersToApply.comparison, numValue));
        }
      }
    }

    if (searchTerm) {
      newData = newData.filter((planet) => applySearchFilter(planet, searchTerm));
    }

    setFilteredData(newData);
  }, [data, searchTerm, filtersToApply]);

  return filteredData;
}
