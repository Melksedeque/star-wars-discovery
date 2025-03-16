import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSpecies } from '../services/api';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import type { Species as SpeciesType } from '../types/api';

export function Species() {
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesType | null>(null);
  
  const { data, isLoading } = useQuery({
    queryKey: ['species'],
    queryFn: () => getSpecies()
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
        {data?.results.map((species) => (
          <Card
            key={species.url}
            title={species.name}
            subtitle={`Classification: ${species.classification}`}
            image="https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?auto=format&fit=crop&q=80"
            onClick={() => setSelectedSpecies(species)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedSpecies}
        onClose={() => setSelectedSpecies(null)}
        title={selectedSpecies?.name || ''}
      >
        {selectedSpecies && (
          <div className="space-y-6 text-gray-300">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-yellow-500">Classification</h4>
                <p>{selectedSpecies.classification}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Designation</h4>
                <p>{selectedSpecies.designation}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Average Height</h4>
                <p>{selectedSpecies.average_height} cm</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Average Lifespan</h4>
                <p>{selectedSpecies.average_lifespan} years</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Language</h4>
                <p>{selectedSpecies.language}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-yellow-500 mb-2">Physical Characteristics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm text-yellow-500/80">Skin Colors</h5>
                  <p>{selectedSpecies.skin_colors}</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Hair Colors</h5>
                  <p>{selectedSpecies.hair_colors}</p>
                </div>
                <div>
                  <h5 className="text-sm text-yellow-500/80">Eye Colors</h5>
                  <p>{selectedSpecies.eye_colors}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}