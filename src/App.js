import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchField"
import ImageTable from "./components/ImageTable"
import fetchImg from './scripts/fetchImg'
import './App.css'

const apiKey = "ebk9TgbXWDj65HhL7XZbexSaBR4XYyQJ"
function App() {
    const [keyword, setKeyword] = useState("what")
    const [imgArr, setImgArr] = useState([])

    useEffect(()=>{
        fetchImg(keyword, imgArr, setImgArr, apiKey)
    }, [keyword])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {  <Navbar/> /* Navbar goes here */}
        <SearchBar/>
        <ImageTable imgArr={imgArr} />




    </div>
  );
}

export default App;


