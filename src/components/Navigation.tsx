import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { useNavigation } from "../contexts/NavigationContext";

interface NavigationProps {
  position?: "left" | "right" | "all";
  size?: string;
}

export default function Navigation({
  position = "all",
  size = "10",
}: NavigationProps) {
  const location = useLocation();
  const { items } = useNavigation();

  const displayItems =
    position === "left"
      ? items.slice(0, 3)
      : position === "right"
      ? items.slice(3, 6)
      : items;

  return (
    <nav className="flex items-center justify-center gap-16">
      {displayItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={cn(
            `flex flex-col items-center p-3 text-md text-white font-bold w-${size} transition-all duration-300 hover:scale-120`,
            location.pathname === item.href ? "scale-120" : ""
          )}
        >
          <img src={item.icon} alt={`Ícone de ${item.name}`} />
          <h4>{item.name}</h4>
        </Link>
      ))}
    </nav>
  );
}
