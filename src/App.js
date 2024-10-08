import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Wrapper } from "./components/wrapper/index"
import { Header } from "./components/header/index"
import { Home } from "./pages/home/index"
import { Atomizators } from "./pages/atomizators/index"
import { Products } from "./pages/products/index"
import { Footer } from "./components/footer/index"
import { ProductionPage } from "./pages/productionPage";
import { Engineering } from "./pages/engineering";
import { Prep } from "./pages/PREP";
import { Viga } from "./pages/VIGA";
import { Eiga } from "./pages/EIGA";
// import { useState } from "react";
// import { ModalQuiz } from "./components/modal-quiz";

function App() {

  // const [modalActive, setModalActive] = useState(true);

  return (
    <>
    <Router>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/atomizators" element={ <Atomizators /> } />
          <Route path="/products" element={ <Products /> } />
          <Route path="/production" element={ <ProductionPage /> } />
          <Route path="/engineering" element={ <Engineering />} />
          <Route path="/prep" element={ <Prep />} />
          <Route path="/viga" element={ <Viga />} />
          <Route path="/eiga" element={ <Eiga />} />
        </Routes>
        <Footer />

      </Wrapper>
        {/* <ModalQuiz active={modalActive} setActive={setModalActive}/> */}
    </Router>
    </>
  );
}

export default App;
