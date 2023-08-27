import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import Table from './Table';
import { PlanetColumn } from '../types';
import PlanetContext from '../context/planets-context';
import useFilter from '../hooks/useFilter';
import useSort from '../hooks/useSort';
import {
  CenteredContent,
  SelectPor,
  Container,
  InputValue,
  Label,
  Label2,
  Label3,
  SearchInput,
  Select,
  InputASC,
  InputDSC,
} from '../styles/home';
import {
  ApplyButton,
  ClearButton,
} from '../styles/home2';
import Header from './Header';
import { TableContainer } from '../styles/table';

const LabelASC = styled.label`
  color: #aeaeae;
  font-family: 'Epilogue-Regular', Helvetica;
  font-size: 12px;
  position: relative;
  @media (max-width: 768px) {
    top: 4.3rem;
    left: 3rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    top: -2.2rem;
    left: 6rem;
  }
  @media (min-width: 1440px) {
    top: -2.2rem;
    left: 6rem;

  }
`;

const LabelDSC = styled.label`
  color: #aeaeae;
  font-family: 'Epilogue-Regular', Helvetica;
  font-size: 12px;
  position: relative;
  @media (max-width: 768px) {
    top: 6.5rem;
    left: -2rem;
  }
  @media (min-width: 769px) and (max-width: 1367px) {
    top: -2.2rem;
    left: 6rem;
  }
  @media (min-width: 1440px) {
    top: -2.2rem;
    left: 6rem;

  }
`;

function Home() {
  const context = useContext(PlanetContext);
  const { planetData, loading } = context || {
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
    <CenteredContent>
      <Header />
      <Container>
        <SearchInput
          type="text"
          value={ src }
          onChange={ (e) => handleSearch(e.target.value) }
          data-testid="name-filter"
          placeholder="Search by name"
        />
        <br />
        <Label htmlFor="column-filter">Coluna:</Label>
        <Select
          data-testid="column-filter"
          value={ filteredColumns }
          onChange={ (e) => handleColumnChange(e.target.value as PlanetColumn) }
        >
          {filterOptions.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
        </Select>
        <Label2 htmlFor="comparison-filter">Operador:</Label2>
        <Select
          data-testid="comparison-filter"
          value={ filteredComparison }
          onChange={ (e) => handleComparisonChange(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </Select>
        <InputValue
          type="number"
          data-testid="value-filter"
          value={ filteredValue }
          onChange={ (e) => handleValueChange(e.target.value) }
        />
        <ApplyButton
          data-testid="button-filter"
          onClick={ () => {
            addFilter();
          } }
        >
          Filtrar
        </ApplyButton>
        <ClearButton
          data-testid="button-remove-filters"
          onClick={ () => {
            clearFilters();
          } }
        >
          Limpar
        </ClearButton>
        <Label3 htmlFor="column-sort">Ordenar por:</Label3>
        <SelectPor
          data-testid="column-sort"
          value={ sortColumn }
          onChange={ (e) => handleSortChange(e.target.value as PlanetColumn) }
        >
          {filterOptions.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
        </SelectPor>
        <LabelASC htmlFor="column-sort-input-asc">Ascendente:</LabelASC>
        <InputASC
          type="radio"
          data-testid="column-sort-input-asc"
          name="sort-direction"
          value="ASC"
          checked={ sortDirection === 'ASC' }
          onChange={ () => handleSortDirection('ASC') }
        />
        <LabelDSC htmlFor="column-sort-input-desc">Descendente</LabelDSC>
        <InputDSC
          type="radio"
          data-testid="column-sort-input-desc"
          name="sort-direction"
          value="DESC"
          checked={ sortDirection === 'DESC' }
          onChange={ () => handleSortDirection('DESC') }
        />
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
        <TableContainer>
          <Table planets={ sortedAndFilteredPlanets } loading={ loading } />
        </TableContainer>
      </Container>
    </CenteredContent>
  );
}

export default Home;
