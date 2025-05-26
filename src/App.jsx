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
        <section>
          <Jobs className="Full Time Sales Associate - " />
          <Jobs title="Sydney Boutique" />
          <Jobs contractType="CDI" />
          <Jobs country="Australie" />
          <Jobs city="Sydney" />
        </section>

        <section>
          <Jobs className="Agent de Sécurité - " />
          <Jobs title="Pantin" />
          <Jobs contractType="CDI" />
          <Jobs country="France" />
          <Jobs city="Pantin" />
        </section>

        <section>
          <Jobs className="Responsable d'Atelier (H/F)" />
          <Jobs contractType="CDD" />
          <Jobs country="France" />
          <Jobs city="Paris" />
        </section>
      </main>

      <footer>
        <Footer text="Made with React at Le Reacteur By Greg" />
      </footer>
    </>
  );
};

export default App;
