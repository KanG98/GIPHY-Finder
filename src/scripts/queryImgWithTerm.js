export default async function queryImgWithTerm(keyWord, imgArr, setImgArr, apiKey){
    apiKey = "ebk9TgbXWDj65HhL7XZbexSaBR4XYyQJ" // need to be fixed
    
    return await fetch(`https://api.giphy.com/v1/gifs/search?q=${String(keyWord)}&api_key=${String(apiKey)}`)
        .then(res => res.json())
        .then(res => {
            setImgArr(res["data"])
        })
}



