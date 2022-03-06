import Header from "./components/partials/Header";
import QrCode from "./components/challenges/qrcode/qr-code";
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
      <section className="welcome">
        <h2>Challenges are issued by frontendmentor.io.</h2>
        <h3>You can view my progress and submitted solutions both on this site and <span>
         <a href="https://www.frontendmentor.io/profile/Tari38/solutions"> here.</a>
        </span>
        </h3>
      </section>
      <section className="challenges">
        <QrCode />
      </section>
    </div>
  );
}

export default App;
