import React, { useState, useEffect } from 'react';
import PlanetContext from './planets-context';
import { PlanetType } from '../types';

type PlanetProviderProps = {
  children: React.ReactNode;
};

function PlanetProvider({ children }: PlanetProviderProps) {
  const [planetData, setPlanetData] = useState<PlanetType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const response = await fetch('https://swapi.dev/api/planets');
        const data = await response.json();
        setPlanetData(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchPlanets();
  }, []);

  return (
    <PlanetContext.Provider value={ { planetData, loading } }>
      {children}
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;
