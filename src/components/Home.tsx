import React, { useContext, useEffect, useState } from 'react';
import Table from './Table';
import { PlanetColumn, PlanetType } from '../types';
import PlanetContext from '../context/planets-context';

function Home() {
  const context = useContext(PlanetContext);
  const { planetData, loading } = context || { planetData: [], loading: true };
  const [src, setSearchTerm] = useState('');
  const [filteredColumns, setFilteredColumns] = useState<PlanetColumn | ''>('');
  const [filteredComparison, setFilteredComparison] = useState<string>('');
  const [filteredValue, setFilteredValue] = useState('0');
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetType[]>(planetData);
  const [filters, setFilters] = useState<{ column: PlanetColumn; comparison: string; value: string }[]>([]);

  const addFilter = () => {
    if (filteredColumns && filteredComparison && filteredValue) {
      const newFilter = {
        column: filteredColumns,
        comparison: filteredComparison,
        value: filteredValue,
      };
      setFilters([...filters, newFilter]);
    }
  };

  const applyFilters = (data: PlanetType[]) => {
    let ft = [...data];

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
  };

  useEffect(() => {
    const filteredData = applyFilters(planetData);
    setFilteredPlanets(filteredData);
  }, [planetData, filters, src]);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  const handleFilter = () => {
    const filteredData = applyFilters(planetData);
    setFilteredPlanets(filteredData);
  };

  const handleColumnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredColumns(e.target.value as PlanetColumn);
  };

  const handleComparisonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredComparison(e.target.value);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredValue(e.target.value);
  };

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        value={ src }
        onChange={ (e) => handleSearch(e.target.value) }
        data-testid="name-filter"
        placeholder="Search by name"
      />
      <label htmlFor="column-filter">Coluna:</label>
      <select
        data-testid="column-filter"
        value={ filteredColumns }
        onChange={ handleColumnChange }
      >
        {Object.values(PlanetColumn).map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <label htmlFor="comparison-filter">Operador:</label>
      <select
        data-testid="comparison-filter"
        value={ filteredComparison }
        onChange={ handleComparisonChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ filteredValue }
        onChange={ handleValueChange }
        placeholder="Enter value"
      />
      <button
        data-testid="button-filter"
        onClick={ () => {
          addFilter();
          handleFilter();
        } }
      >
        Aplicar Filtro
      </button>
      <button
        onClick={ () => {
          setFilters([]);
          handleFilter();
        } }
      >
        Limpar Filtros
      </button>
      <div>
        {filters.map((filter, index) => (
          <div key={ index }>
            Filtro
            {' '}
            {index + 1}
            :
            {' '}
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
          </div>
        ))}
      </div>
      <Table planets={ filteredPlanets } loading={ loading } />
    </div>
  );
}

export default Home;
