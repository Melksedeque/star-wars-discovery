import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Films } from "./pages/Films";
import { Characters } from "./pages/Characters";
import { Species } from "./pages/Species";
import { Planets } from "./pages/Planets";
import { Starships } from "./pages/Starships.tsx";
import { Vehicles } from "./pages/Vehicles";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/species" element={<Species />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/vehicles" element={<Vehicles />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
