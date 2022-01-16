export default async function queryRandomImg(imgArr, setImgArr, apiKey){
    
    return await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        .then(res => res.json())
        .then(res => {
            setImgArr([res["data"]])
        })
}



