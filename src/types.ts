export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export enum PlanetColumn {
  Population = 'population',
  OrbitalPeriod = 'orbital_period',
  Diameter = 'diameter',
  RotationPeriod = 'rotation_period',
  SurfaceWater = 'surface_water',
}

export interface Filter {
  column: PlanetColumn;
  comparison: string;
  value: string;
}

export interface FilterOptions {
  filteredColumns: PlanetColumn;
  filteredComparison: string;
  filteredValue: string;
  filters: Filter[];
  src: string;
  filterOptions: PlanetColumn[];
  filteredPlanets: PlanetType[];
  handleColumnChange: (value: PlanetColumn) => void;
  handleComparisonChange: (value: string) => void;
  handleValueChange: (value: string) => void;
  handleSearch: (searchTerm: string) => void;
  addFilter: () => void;
  clearFilters: () => void;
  removeFilter: (index: number) => void;
}

export interface SortOptions {
  sortColumn: PlanetColumn;
  sortDirection: 'ASC' | 'DESC';
  handleSortChange: (value: PlanetColumn) => void;
  handleSortDirection: (value: 'ASC' | 'DESC') => void;
  handleSortSubmit: (filteredPlanets: PlanetType[]) => void;
}

export type SortProps = {
  sortColumn: PlanetColumn;
  sortDirection: 'ASC' | 'DESC';
};
