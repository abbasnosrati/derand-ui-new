import "./App.css";
import BoxSection from "./components/BoxSection/BoxSection";
import Details from "./components/Details/Deatils";
// import Example from "./components/Example/Example";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="page-noise ">
      <div className="content flex items-center justify-center">
        <div className="max-w-[1440px] above-1440:max-w-[1920px] w-full">
          <Header />
          {/* <Example /> */}
          <BoxSection />
          <Details />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
