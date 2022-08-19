// import logo from './logo.svg';
import "./App.css";
import DenseAppBar from "./components/AppBar";
import HomePage from "./components/HomePage";
import Parent from "./components/Parent";
import About from "./components/About";
import UseEffect from "./hooks.practice/UseEffect";
import UseMemo from "./hooks.practice/UseMemo";
// import Accounts from "./components/Accounts";
function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <HomePage />
      <About />
      <Parent />
      {/* <UseMemo/> */}
      {/* <UseEffect/> */}
    </div>
  );
}

export default App;
