import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import {
  Film,
  Users,
  AlignCenter as Alien,
  Globe,
  Rocket,
  Truck,
} from "lucide-react";

export default function Home() {
  const navigation = [
    { name: "Films", href: "/", icon: Film },
    { name: "Characters", href: "/characters", icon: Users },
    { name: "Species", href: "/species", icon: Alien },
    { name: "Planets", href: "/planets", icon: Globe },
    { name: "Starships", href: "/starships", icon: Rocket },
    { name: "Vehicles", href: "/vehicles", icon: Truck },
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
        <img
          src="/images/LogoStarWars.svg"
          alt="Star Wars Logo"
          className="w-64 mb-8"
        />
        <h1 className="text-4xl font-bold">Welcome to the home page</h1>
        <p className="text-lg">This is the home page</p>
      </div>
      <nav className="hidden md:flex space-x-8">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "text-yellow-500 bg-yellow-500/10"
                  : "text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
