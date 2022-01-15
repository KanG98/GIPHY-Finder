import sortImgSize from "./sortImgSize"

export default async function queryTrendingImg(imgArr, setImgArr, apiKey){
    return await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
        .then(res => res.json())
        .then(res => {
            setImgArr(res["data"])
            sortImgSize(imgArr, setImgArr)
        })
}



