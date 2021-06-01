import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar>
        <Banner />
      </Navbar>
      <Home />
    </>
  );
}

export default App;
