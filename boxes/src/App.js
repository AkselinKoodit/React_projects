import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Main_router from "./Main_router";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Main_router />
      <Footer />
    </Router>
  );
};

export default App;
