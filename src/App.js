import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchField"
import './App.css'
import image from "./image/GIPHY_Images.png"


function App() {


  return (
    <div className="App">
      <header className="App-header">
      </header>

      {  <Navbar/> /* Navbar goes here */}
        <image/>
        {<SearchBar/>}


      {/* search bar goes here (calls queryzipcode function)*/}

    </div>
  );
}

export default App;
