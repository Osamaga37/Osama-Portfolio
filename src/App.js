import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import MyService from "./components/MyService/MyService";
import ReposList from "./components/Repos/Repos";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const username = "osamaga37";
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <MyService />
      <ReposList username={username} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
