import React, { useContext, useMemo } from 'react';
import Table from './Table';
import { PlanetColumn } from '../types';
import PlanetContext from '../context/planets-context';
import useFilter from '../hooks/useFilter';
import useSort from '../hooks/useSort';

function Home() {
  const context = useContext(PlanetContext);
  const { planetData, loading, setSortState = () => {} } = context || {
    planetData: [],
    loading: true,
  };

  const {
    filteredColumns,
    filteredComparison,
    filteredValue,
    filterOptions,
    filters,
    src,
    handleColumnChange,
    handleComparisonChange,
    handleValueChange,
    handleSearch,
    addFilter,
    clearFilters,
    removeFilter,
    filteredPlanets,
  } = useFilter(planetData);

  const {
    sortColumn,
    sortDirection,
    handleSortChange,
    handleSortDirection,
    handleSortSubmit,
  } = useSort();

  const sortedAndFilteredPlanets = useMemo(() => {
    const sortedData = handleSortSubmit(filteredPlanets);
    return sortedData;
  }, [handleSortSubmit, filteredPlanets]);

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
      <br />
      <label htmlFor="column-filter">Coluna:</label>
      <select
        data-testid="column-filter"
        value={ filteredColumns }
        onChange={ (e) => handleColumnChange(e.target.value as PlanetColumn) }
      >
        {filterOptions.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <label htmlFor="comparison-filter">Operador:</label>
      <select
        data-testid="comparison-filter"
        value={ filteredComparison }
        onChange={ (e) => handleComparisonChange(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ filteredValue }
        onChange={ (e) => handleValueChange(e.target.value) }
      />
      <button
        data-testid="button-filter"
        onClick={ () => {
          addFilter();
        } }
      >
        Aplicar Filtro
      </button>
      <button
        data-testid="button-remove-filters"
        onClick={ () => {
          clearFilters();
        } }
      >
        Limpar Filtros
      </button>
      <div>
        <label htmlFor="column-sort">Ordenar por:</label>
        <select
          data-testid="column-sort"
          value={ sortColumn }
          onChange={ (e) => handleSortChange(e.target.value as PlanetColumn) }
        >
          {filterOptions.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
        </select>
        <label htmlFor="column-sort-input-asc">Ascendente:</label>
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="sort-direction"
          value="ASC"
          checked={ sortDirection === 'ASC' }
          onChange={ () => handleSortDirection('ASC') }
        />
        <label htmlFor="column-sort-input-desc">Descendente</label>
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="sort-direction"
          value="DESC"
          checked={ sortDirection === 'DESC' }
          onChange={ () => handleSortDirection('DESC') }
        />
        <button
          data-testid="column-sort-button"
          onClick={ () => {
            setSortState({
              sortColumn,
              sortDirection,
            });
          } }
        >
          Ordenar
        </button>
      </div>
      <div>
        {filters.map((filter, index) => (
          <div data-testid="filter" key={ index }>
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
            <button onClick={ () => removeFilter(index) }>Remover</button>
          </div>
        ))}
      </div>
      <Table planets={ sortedAndFilteredPlanets } loading={ loading } />
    </div>
  );
}

export default Home;
