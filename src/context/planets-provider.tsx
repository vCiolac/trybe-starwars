import React from 'react';
import PlanetContext from './planets-context';
import { useData } from '../hooks/useData';

type PlanetProviderProps = {
  children: React.ReactNode;
};

function PlanetProvider({ children }: PlanetProviderProps) {
  const { planetData, loading } = useData();

  return (
    <PlanetContext.Provider value={ { planetData, loading } }>
      {children}
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;
