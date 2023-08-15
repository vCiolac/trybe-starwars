import { useCallback, useEffect, useState } from 'react';
import { Filter, FilterOptions, PlanetColumn, PlanetType } from '../types';

const useFilter = (planetData: PlanetType[]): FilterOptions => {
  const [filteredColumns, setFilteredColumns] = useState<PlanetColumn>(
    PlanetColumn.Population,
  );
  const [filteredComparison, setFilteredComparison] = useState<string>('maior que');
  const [filteredValue, setFilteredValue] = useState<string>('0');
  const [filters, setFilters] = useState<Filter[]>([]);
  const [src, setSearchTerm] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<PlanetColumn[]>(
    Object.values(PlanetColumn),
  );

  useEffect(() => {
    if (!filterOptions.includes(filteredColumns)) {
      setFilteredColumns(filterOptions[0]);
    }
  }, [filterOptions, filteredColumns]);

  const handleColumnChange = (value: PlanetColumn) => {
    setFilteredColumns(value);
  };

  const handleComparisonChange = (value: string) => {
    setFilteredComparison(value);
  };

  const handleValueChange = (value: string) => {
    setFilteredValue(value);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const addFilter = () => {
    if (filteredColumns && filteredComparison && filteredValue) {
      const newFilter: Filter = {
        column: filteredColumns,
        comparison: filteredComparison,
        value: filteredValue,
      };
      setFilters([...filters, newFilter]);
      setFilterOptions(filterOptions.filter((option) => option !== filteredColumns));
    }
  };

  const removeFilter = (index: number) => {
    const removedColumn = filters[index].column;
    const newFilters = filters.filter((_, i) => i !== index);
    setFilters(newFilters);

    if (!filterOptions.includes(removedColumn)) {
      setFilterOptions([...filterOptions, removedColumn]);
    }
  };

  const clearFilters = () => {
    setFilters([]);
    setFilterOptions(Object.values(PlanetColumn));
  };

  const applyFilters = useCallback(
    (planetsData: PlanetType[]): PlanetType[] => {
      let ft = [...planetsData];

      filters.forEach((filter) => {
        const value = parseFloat(filter.value);
        if (!Number.isNaN(value)) {
          ft = ft.filter((planet) => {
            const planetValue = parseFloat(planet[filter.column]);
            if (!Number.isNaN(planetValue)) {
              switch (filter.comparison) {
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
          });
        }
      });

      if (src) {
        ft = ft.filter((planet) => planet.name.toLowerCase().includes(src.toLowerCase()));
      }

      return ft;
    },
    [filters, src],
  );

  const filteredPlanets = applyFilters(planetData);

  return {
    filteredColumns,
    filteredComparison,
    filteredValue,
    filters,
    src,
    filterOptions,
    filteredPlanets,
    handleColumnChange,
    handleComparisonChange,
    handleValueChange,
    handleSearch,
    addFilter,
    clearFilters,
    removeFilter,
  };
};

export default useFilter;
