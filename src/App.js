import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Wrapper } from "./components/wrapper/index"
import { Home } from "./pages/home/index"
import { Atomizators } from "./pages/atomizators/index"
import { Footer } from "./components/footer/index"
import { ProductionPage } from "./pages/productionPage";
import { Engineering } from "./pages/engineering";
import { Prep } from "./pages/PREP";
import { Viga } from "./pages/VIGA";
import { Eiga } from "./pages/EIGA";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {

  return (
    <>
    <Router>
      <Wrapper>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/atomizators" element={ <Atomizators /> } />
          <Route path="/production" element={ <ProductionPage /> } />
          <Route path="/engineering" element={ <Engineering />} />
          <Route path="/prep" element={ <Prep />} />
          <Route path="/viga" element={ <Viga />} />
          <Route path="/eiga" element={ <Eiga />} />
        </Routes>
        <Footer />

      </Wrapper>
    </Router>
    </>
  );
}

export default App;
