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
