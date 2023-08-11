import React, { useContext, useState } from 'react';
import Table from './Table';
import { PlanetType } from '../types';
import PlanetContext from '../context/planets-context';

function Home() {
  const context = useContext(PlanetContext);
  const { planetData, loading } = context || { planetData: [], loading: true };
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetType[]>(planetData);

  const handleSearch = (search: string) => {
    setSearchTerm(search);

    const filtered = planetData.filter((planet) =>
      planet.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredPlanets(filtered);
  };

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        value={ searchTerm }
        onChange={ (e) => handleSearch(e.target.value) }
        data-testid="name-filter"
        placeholder="Search by name"
      />
      <Table planets={ searchTerm ? filteredPlanets : planetData } loading={ loading } />
    </div>
  );
}

export default Home;
