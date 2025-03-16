import { Link, useLocation } from 'react-router-dom';
import { Film, Users, AlignCenter as Alien, Globe, Rocket, Truck } from 'lucide-react';
import { cn } from '../utils/cn';

const navigation = [
  { name: 'Films', href: '/', icon: Film },
  { name: 'Characters', href: '/characters', icon: Users },
  { name: 'Species', href: '/species', icon: Alien },
  { name: 'Planets', href: '/planets', icon: Globe },
  { name: 'Starships', href: '/starships', icon: Rocket },
  { name: 'Vehicles', href: '/vehicles', icon: Truck },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-[url('/bg-home.png')] bg-cover bg-fixed">
      <div className="min-h-screen bg-black/70 backdrop-blur-sm">
        <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-md border-b border-yellow-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-between">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-yellow-500">Star Wars Discovery</h1>
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
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}