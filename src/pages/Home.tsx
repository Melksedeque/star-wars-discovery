import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";

export default function Home() {
  const navigation = [
    { name: "Filmes", href: "/", icon: "/icons/films.png" },
    { name: "Personagens", href: "/characters", icon: "/icons/characters.svg" },
    { name: "Espécies", href: "/species", icon: "/icons/species.svg" },
    { name: "Planetas", href: "/planets", icon: "/icons/planets.svg" },
    { name: "Naves", href: "/starships", icon: "/icons/starships.svg" },
    { name: "Veículos", href: "/vehicles", icon: "/icons/vehicles.svg" },
  ];
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src="/images/LogoStarWarsDiscovery.png"
          alt="Star Wars Logo"
          className="w-64 mb-8"
        />
      </div>
      <nav className="hidden md:flex space-x-8">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "text-yellow-500 bg-yellow-500/10"
                  : "text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10"
              )}
            >
              <img src={Icon} alt={`Ícone de ${item.name}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
