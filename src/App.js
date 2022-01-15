import { useEffect, useState, componentDidMount } from "react";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchField"
import ImageTable from "./components/ImageTable"
import queryImgWithTerm from "./scripts/queryImgWithTerm";
import './App.css'
import queryTrendingImg from "./scripts/queryTrendingImg";
import queryRandomImg from "./scripts/queryRandomImg";
import image from "./image/GIPHY_Images.png"



const apiKey = "ebk9TgbXWDj65HhL7XZbexSaBR4XYyQJ"



function App() {
    const [keyword, setKeyword] = useState("")
    const [imgArr, setImgArr] = useState([])

    function handleScroll(e){
      const bottom = e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop === e.target.scrollingElement.clientHeight;
      if (bottom) {
        alert("Reached max limit of beta api key: 50 images")
        window.scrollTo(0, 0)
        // queryImgWithTerm(keyword, imgArr, setImgArr, apiKey)
      }
    }

    useEffect(()=>{
      // queryImgWithTerm(keyword, imgArr, setImgArr, apiKey)
      // queryTrendingImg(imgArr, setImgArr, apiKey)
      queryRandomImg(imgArr, setImgArr, apiKey)
    }, [keyword])

    useEffect(()=>{
      window.scrollTo(0, 0)
      window.addEventListener('scroll', handleScroll)
    }, [])

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
