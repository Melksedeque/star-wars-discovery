import axios from 'axios';
import type { APIResponse, Film, Character, Species, Planet, Starship, Vehicle } from '../types/api';

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const getFilms = async () => {
  const { data } = await api.get<APIResponse<Film>>('/films');
  return data;
};

export const getCharacters = async (page = 1) => {
  const { data } = await api.get<APIResponse<Character>>(`/people/?page=${page}`);
  return data;
};

export const getSpecies = async (page = 1) => {
  const { data } = await api.get<APIResponse<Species>>(`/species/?page=${page}`);
  return data;
};

export const getPlanets = async (page = 1) => {
  const { data } = await api.get<APIResponse<Planet>>(`/planets/?page=${page}`);
  return data;
};

export const getStarships = async (page = 1) => {
  const { data } = await api.get<APIResponse<Starship>>(`/starships/?page=${page}`);
  return data;
};

export const getVehicles = async (page = 1) => {
  const { data } = await api.get<APIResponse<Vehicle>>(`/vehicles/?page=${page}`);
  return data;
};

export const getItemById = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get<T>(url);
  return data;
};