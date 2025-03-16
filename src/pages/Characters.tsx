import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharacters, getItemById } from '../services/api';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import type { Character, Film } from '../types/api';

export function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [characterFilms, setCharacterFilms] = useState<Film[]>([]);
  
  const { data, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: () => getCharacters()
  });

  const handleCharacterClick = async (character: Character) => {
    setSelectedCharacter(character);
    const films = await Promise.all(
      character.films.map(url => getItemById<Film>(url))
    );
    setCharacterFilms(films);
  };

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
        {data?.results.map((character) => (
          <Card
            key={character.url}
            title={character.name}
            subtitle={`Birth Year: ${character.birth_year}`}
            image="https://images.unsplash.com/photo-1546561892-65bf811416b9?auto=format&fit=crop&q=80"
            onClick={() => handleCharacterClick(character)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        title={selectedCharacter?.name || ''}
      >
        {selectedCharacter && (
          <div className="space-y-6 text-gray-300">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-yellow-500">Height</h4>
                <p>{selectedCharacter.height} cm</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Mass</h4>
                <p>{selectedCharacter.mass} kg</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Hair Color</h4>
                <p>{selectedCharacter.hair_color}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Eye Color</h4>
                <p>{selectedCharacter.eye_color}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Birth Year</h4>
                <p>{selectedCharacter.birth_year}</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500">Gender</h4>
                <p>{selectedCharacter.gender}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-yellow-500 mb-2">Appears in Films</h4>
              <ul className="list-disc list-inside space-y-1">
                {characterFilms.map(film => (
                  <li key={film.episode_id}>{film.title}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}