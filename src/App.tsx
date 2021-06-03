import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from './components/Home';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
      <Navbar>
        <Banner />
      </Navbar>
      <Home />
      <Footer>
        <Newsletter />
      </Footer>
    </>
  );
}

export default App;
