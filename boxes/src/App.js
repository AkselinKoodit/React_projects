import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer";

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <Box name="Sakarius Topelius" age="123" title="kirjailija" />
        <Box name="Akseli Miettinen" age="65" title="Suurmestari" />
        <Box name="Fantastic Fred" age="1050" title="Grand Wizard" />
        <div className="box" id="myId">
          <h2>Name: Manually Written</h2>
          <p>Age: 10</p>
          <p>Title: Dr.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
