import { useState, useEffect } from 'react';
import { PlanetType } from '../types';

export function useData() {
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

  return { planetData, loading };
}
