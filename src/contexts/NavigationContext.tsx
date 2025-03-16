import { createContext, useContext, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationItem {
  name: string;
  href: string;
  icon: string;
}

interface NavigationContextType {
  items: NavigationItem[];
  isHomeRoute: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [items] = useState([
    {
      name: "Filmes",
      href: "/films",
      icon: "/images/icons/films.svg",
    },
    {
      name: "Personagens",
      href: "/characters",
      icon: "/images/icons/characters.svg",
    },
    {
      name: "Planetas",
      href: "/planets",
      icon: "/images/icons/planets.svg",
    },
    {
      name: "Espécies",
      href: "/species",
      icon: "/images/icons/species.svg",
    },
    {
      name: "Naves",
      href: "/starships",
      icon: "/images/icons/starships.svg",
    },
    {
      name: "Veículos",
      href: "/vehicles",
      icon: "/images/icons/vehicles.svg",
    },
  ]);

  const isHomeRoute = location.pathname === "/";

  return (
    <NavigationContext.Provider value={{ items, isHomeRoute }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}