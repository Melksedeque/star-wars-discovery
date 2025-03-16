import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStarships } from '../services/api';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import type { Starship } from '../types/api';

export function Starships() {
  const [selectedStarship, setSelectedStarship] = useState<Starship | null>(null);
  
  const { data, isLoading } = useQuery({
    queryKey: ['starships'],
    queryFn: () => getStarships()
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
        {data?.results.map((starship) => (
          <Card
            key={starship.url}
            title={starship.name}
            subtitle={`Class: ${starship.starship_class}`}
            image="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80"
            onClick={() => setSelectedStarship(starship)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedStarship}
        onClose={() => setSelectedStarship(null)}
        title={selectedStarship?.name || ''}
      >
        {selectedStarship && (
          <div className="space-y-6 text-gray-300">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-yellow-500">Model</h4>
                <p>{selectedStarship.model}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Manufacturer</h4>
                <p>{selectedStarship.manufacturer}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Cost</h4>
                <p>{selectedStarship.cost_in_credits} credits</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Length</h4>
                <p>{selectedStarship.length} meters</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Max Speed</h4>
                <p>{selectedStarship.max_atmosphering_speed}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Hyperdrive Rating</h4>
                <p>{selectedStarship.hyperdrive_rating}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-yellow-500 mb-2">Capacity</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm text-yellow-500/80">Crew</h5>
                  <p>{selectedStarship.crew}</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Passengers</h5>
                  <p>{selectedStarship.passengers}</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Cargo Capacity</h5>
                  <p>{selectedStarship.cargo_capacity} kg</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Consumables</h5>
                  <p>{selectedStarship.consumables}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}