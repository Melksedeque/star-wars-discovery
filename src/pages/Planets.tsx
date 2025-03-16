import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPlanets } from '../services/api';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import type { Planet } from '../types/api';

export function Planets() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  
  const { data, isLoading } = useQuery({
    queryKey: ['planets'],
    queryFn: () => getPlanets()
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-yellow-500">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.results.map((planet) => (
          <Card
            key={planet.url}
            title={planet.name}
            subtitle={`Population: ${planet.population}`}
            image="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80"
            onClick={() => setSelectedPlanet(planet)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedPlanet}
        onClose={() => setSelectedPlanet(null)}
        title={selectedPlanet?.name || ''}
      >
        {selectedPlanet && (
          <div className="space-y-6 text-gray-300">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-yellow-500">Climate</h4>
                <p>{selectedPlanet.climate}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Terrain</h4>
                <p>{selectedPlanet.terrain}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Population</h4>
                <p>{selectedPlanet.population}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Diameter</h4>
                <p>{selectedPlanet.diameter} km</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Gravity</h4>
                <p>{selectedPlanet.gravity}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Surface Water</h4>
                <p>{selectedPlanet.surface_water}%</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-yellow-500 mb-2">Orbital Characteristics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm text-yellow-500/80">Rotation Period</h5>
                  <p>{selectedPlanet.rotation_period} hours</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Orbital Period</h5>
                  <p>{selectedPlanet.orbital_period} days</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}