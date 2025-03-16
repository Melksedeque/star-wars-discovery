import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getVehicles } from '../services/api';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import type { Vehicle } from '../types/api';

export function Vehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  
  const { data, isLoading } = useQuery({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles()
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
        {data?.results.map((vehicle) => (
          <Card
            key={vehicle.url}
            title={vehicle.name}
            subtitle={`Class: ${vehicle.vehicle_class}`}
            image="https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&q=80"
            onClick={() => setSelectedVehicle(vehicle)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        title={selectedVehicle?.name || ''}
      >
        {selectedVehicle && (
          <div className="space-y-6 text-gray-300">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-yellow-500">Model</h4>
                <p>{selectedVehicle.model}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Manufacturer</h4>
                <p>{selectedVehicle.manufacturer}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Cost</h4>
                <p>{selectedVehicle.cost_in_credits} credits</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Length</h4>
                <p>{selectedVehicle.length} meters</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Max Speed</h4>
                <p>{selectedVehicle.max_atmosphering_speed}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Vehicle Class</h4>
                <p>{selectedVehicle.vehicle_class}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-yellow-500 mb-2">Capacity</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm text-yellow-500/80">Crew</h5>
                  <p>{selectedVehicle.crew}</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Passengers</h5>
                  <p>{selectedVehicle.passengers}</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Cargo Capacity</h5>
                  <p>{selectedVehicle.cargo_capacity} kg</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Consumables</h5>
                  <p>{selectedVehicle.consumables}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}