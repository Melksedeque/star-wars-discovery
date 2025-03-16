import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { useNavigation } from "../contexts/NavigationContext";

export default function Navigation() {
  const location = useLocation();
  const { items } = useNavigation();

  return (
    <nav className="flex items-center justify-center gap-20">
      {items.map((item) => (
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
          <img src={item.icon} alt={`Ícone de ${item.name}`} />
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}