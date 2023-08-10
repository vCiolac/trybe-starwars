import React from 'react';
import Table from './Table';

function Home() {
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <Table apiURL="https://swapi.dev/api/planets" />
    </div>
  );
}

export default Home;
