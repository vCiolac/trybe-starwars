import { useState } from 'react';
import { PlanetColumn, PlanetType, SortOptions } from '../types';

const useSort = (): SortOptions => {
  const [sortColumn, setSortColumn] = useState<PlanetColumn>(PlanetColumn.Population);
  const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>('ASC');

  const handleSortChange = (value: PlanetColumn) => {
    setSortColumn(value);
  };

  const handleSortDirection = (value: 'ASC' | 'DESC') => {
    setSortDirection(value);
  };

  const handleSortSubmit = (filteredPlanets: PlanetType[]): PlanetType[] => {
    const sortValue = (value: string) => {
      if (value === 'unknown') {
        return sortDirection === 'ASC'
          ? Number.POSITIVE_INFINITY
          : Number.NEGATIVE_INFINITY;
      }
      return parseFloat(value);
    };

    const sortComparator = (a: PlanetType, b: PlanetType) => {
      const valueA = sortValue(a[sortColumn]);
      const valueB = sortValue(b[sortColumn]);

      return sortDirection === 'ASC' ? valueA - valueB : valueB - valueA;
    };

    const sortedData = [...filteredPlanets].sort(sortComparator);

    return sortedData;
  };

  return {
    sortColumn,
    sortDirection,
    handleSortChange,
    handleSortDirection,
    handleSortSubmit,
  };
};

export default useSort;
