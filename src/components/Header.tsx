import { Link } from "react-router-dom";
import { useNavigation } from "../contexts/NavigationContext";
import Navigation from "./Navigation";

export default function Header() {
  const { isHomeRoute } = useNavigation();

  return (
    <header className="bg-black flex items-center justify-center gap-28 p-8 mb-10">
      {!isHomeRoute && <Navigation position="left" size="10" />}
      <Link to={"/"}>
        <img
          src="/images/LogoStarWarsDiscovery.png"
          alt="Star Wars Logo"
          className="w-28"
        />
      </Link>
      {!isHomeRoute && <Navigation position="right" size="10" />}
    </header>
  );
}
