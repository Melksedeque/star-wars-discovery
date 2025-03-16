export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="/LogoStarWarsDiscovery.png"
        alt="Star Wars Logo"
        className="w-64 mb-8"
      />
      <img
        src="/LogoStarWars.svg"
        alt="Star Wars Logo"
        className="w-64 mb-8"
      />
      <h1 className="text-4xl font-bold">Welcome to the home page</h1>
      <p className="text-lg">This is the home page</p>
    </div>
  );
}
