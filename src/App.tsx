import About from "./components/about";
import Business from "./components/business";
import Company from "./components/company";
import Footer from "./components/footer";
import Header from "./components/header";
// import Hero from "./components/hero";
import News from "./components/news";
import SlideHero from "./components/slide-hero";

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <SlideHero />
      <News />
      <About />
      <Business />
      <Company />
      <Footer />
    </>
  );
}

export default App;
