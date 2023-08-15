import React, { useState } from 'react';
import PlanetContext from './planets-context';
import { useData } from '../hooks/useData';
import { PlanetColumn, SortProps } from '../types';

type PlanetProviderProps = {
  children: React.ReactNode;
};

function PlanetProvider({ children }: PlanetProviderProps) {
  const { planetData, loading } = useData();
  const [sortState, setSortState] = useState<SortProps>({
    sortColumn: PlanetColumn.Population,
    sortDirection: 'ASC',
  });

  return (
    <PlanetContext.Provider value={ { planetData, loading, sortState, setSortState } }>
      {children}
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;
