import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getFilms } from '../services/api';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import type { Film } from '../types/api';

export function Films() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  
  const { data, isLoading } = useQuery({
    queryKey: ['films'],
    queryFn: getFilms
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
        {data?.results.map((film) => (
          <Card
            key={film.episode_id}
            title={film.title}
            subtitle={`Episode ${film.episode_id}`}
            image={`https://images.unsplash.com/photo-1547700055-b61cacebece9?auto=format&fit=crop&q=80`}
            onClick={() => setSelectedFilm(film)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedFilm}
        onClose={() => setSelectedFilm(null)}
        title={selectedFilm?.title || ''}
      >
        {selectedFilm && (
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-yellow-500">Episode {selectedFilm.episode_id}</h3>
              <p className="mt-2 italic">{selectedFilm.opening_crawl}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-yellow-500">Director</h4>
                <p>{selectedFilm.director}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Producer</h4>
                <p>{selectedFilm.producer}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Release Date</h4>
                <p>{new Date(selectedFilm.release_date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}