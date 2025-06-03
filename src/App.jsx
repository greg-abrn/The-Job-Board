import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <div className="box">
            <div>
              <p>Full Time Sales Associate - Sydney Boutique</p>
            </div>
            <div className="bottom-desc">
              <span>CDI</span>
              <span> - </span>
              <span>Australie</span>
              <span> - </span>
              <span>Sydney</span>
            </div>
          </div>

          <div className="box">
            <div>
              <p>Agent de Sécurité - Pantin</p>
            </div>
            <div className="bottom-desc">
              <span>CDI</span>
              <span> - </span>
              <span>France</span>
              <span> - </span>
              <span>Pantin</span>
            </div>
          </div>

          <div className="box">
            <div>
              <p>Responsable d'Atelier (H/F)</p>
            </div>
            <div className="bottom-desc">
              <span>CDD</span>
              <span> - </span>
              <span>France</span>
              <span> - </span>
              <span>Paris</span>
            </div>
          </div>

          <div className="box">
            <div>
              <p>Chef de Projets</p>
            </div>
            <div className="bottom-desc">
              <span>CDD</span>
              <span> - </span>
              <span>France</span>
              <span> - </span>
              <span>Paris</span>
            </div>
          </div>

          <div className="box">
            <div>
              <p>Développeur React.js</p>
            </div>
            <div className="bottom-desc">
              <span>CDI</span>
              <span> - </span>
              <span>France</span>
              <span> - </span>
              <span>Paris</span>
            </div>
          </div>

          <div className="box">
            <div>
              <p>Sales Associate Stockholm</p>
            </div>
            <div className="bottom-desc">
              <span>CDI</span>
              <span> - </span>
              <span>Suède</span>
              <span> - </span>
              <span>Stockholm</span>
            </div>
          </div>

          <div className="box">
            <div>
              <p>Vendeur/se - Crans Montana</p>
            </div>
            <div className="bottom-desc">
              <span>CDI</span>
              <span> - </span>
              <span>Suisse</span>
              <span> - </span>
              <span>Crans - Montana</span>
            </div>
          </div>

          <div className="box">
            <div>
              <p>CRM & Data Quality Analyst</p>
            </div>
            <div className="bottom-desc">
              <span>CDI</span>
              <span> - </span>
              <span>USA</span>
              <span> - </span>
              <span>New York</span>
            </div>
          </div>

          <div className="box">
            <div>
              <p>Infirmier (H/F)</p>
            </div>
            <div className="bottom-desc">
              <span>CDI</span>
              <span> - </span>
              <span>France</span>
              <span> - </span>
              <span>Pantin</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
