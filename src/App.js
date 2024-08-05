import { Wrapper } from "./components/wrapper";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Advantages } from "./components/advantages";
import { Products } from "./components/products";
import { News } from "./components/news";
import { Brief } from "./components/brief";
import { Contacts } from "./components/contacts";
import { Footer } from "./components/footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Products />
      <Brief />
      <News />
      <Contacts />
      <Footer />
    </Wrapper>
  );
}

export default App;
