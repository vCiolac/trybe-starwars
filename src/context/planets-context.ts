import { createContext } from 'react';
import { PlanetType } from '../types';

type PlanetContextProps = {
  planetData: PlanetType[];
  loading: boolean;
};

const PlanetContext = createContext<PlanetContextProps | undefined>(undefined);

export default PlanetContext;
