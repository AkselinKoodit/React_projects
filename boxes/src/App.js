import "./App.css";

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
      <header>
        <h1>Logo</h1>
      </header>
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
      <footer>
        <p>Copyright</p>
      </footer>
    </div>
  );
}

export default App;
