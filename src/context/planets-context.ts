import { Dispatch, SetStateAction, createContext } from 'react';
import { PlanetType, SortProps } from '../types';

type PlanetContextProps = {
  planetData: PlanetType[];
  loading: boolean;
  sortState: SortProps;
  setSortState?: Dispatch<SetStateAction<SortProps>>;
};

const PlanetContext = createContext<PlanetContextProps | undefined>(undefined);

export default PlanetContext;
