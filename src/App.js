import { useEffect, useState, componentDidMount } from "react";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar"
import ImageTable from "./components/ImageTable"
import queryImgWithTerm from "./scripts/queryImgWithTerm";
import './App.css'
import queryTrendingImg from "./scripts/queryTrendingImg";
import filterImgRating from "./scripts/filterImgRating";
import ImageCell from "./components/ImageCell";


const apiKey = "7zXTZYA3auJeCtontYTUMLwB1uAN9On3"



function App() {
    const [keyword, setKeyword] = useState("")
    const [imgArr, setImgArr] = useState([])
    const [rating, setRating] = useState(["p", "g", "pg"])
    const [tempGar, setTempGar] = useState([])

    function handleScroll(e){
      const bottom = e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop === e.target.scrollingElement.clientHeight;
      if (bottom) {
        alert("Reached max limit of beta api key: 50 images")
        window.scrollTo(0, 0)
        // queryImgWithTerm(keyword, imgArr, setImgArr, apiKey)
      }
    }

    useEffect(()=>{
      queryImgWithTerm(keyword, imgArr, setImgArr, apiKey)
      setRating(["p", "g", "pg"])
      setTempGar([])
    }, [keyword])

    useEffect(() =>{
      filterImgRating(rating, imgArr, setImgArr, tempGar, setTempGar)
    }, [rating])

    useEffect(() =>{
      queryTrendingImg(imgArr, setImgArr, apiKey)
      window.scrollTo(0, 0)
      window.addEventListener('scroll', handleScroll)
    }, [])



  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Navbar setKeyword={setKeyword} imgArr={imgArr} setImgArr={setImgArr} apiKey={apiKey}/>
        <SearchBar setKeyword={setKeyword} rating={rating} setRating={setRating}/>
        {imgArr.length == 1 ? 
          <ImageCell key={imgArr[0]['id']} className="gif" data={imgArr[0]} alone={true} style={{backgroundColor: "red"}}/> :  
          <ImageTable imgArr={imgArr} />}
    </div>
  );
}

export default App;
