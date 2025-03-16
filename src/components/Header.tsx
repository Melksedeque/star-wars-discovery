import { Link } from "react-router-dom";
import { useNavigation } from "../contexts/NavigationContext";
import Navigation from "./Navigation";

export default function Header() {
  const { isHomeRoute } = useNavigation();

  return (
    <header className="bg-black flex items-center justify-center p-8 mb-10">
      {!isHomeRoute && <Navigation />}
      <Link to={"/"} className="">
        <img
          src="/images/LogoStarWarsDiscovery.png"
          alt="Star Wars Logo"
          className="w-28"
        />
      </Link>
      {!isHomeRoute && <Navigation />}
    </header>
  );
}