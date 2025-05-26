import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header>
        <Header title="The Job Board" />
      </header>

      <main>
        <Jobs />
      </main>

      <footer>
        <Footer text="Made with React at Le Reacteur By Greg" />
      </footer>
    </>
  );
};

export default App;
