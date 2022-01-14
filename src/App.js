import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchField"
import './App.css'


function App() {


  return (
    <div className="App">
      <header className="App-header">
      </header>
      {  <Navbar/> /* Navbar goes here */}
        <SearchBar/>


      {/* search bar goes here (calls queryzipcode function)*/}

    </div>
  );
}

export default App;
