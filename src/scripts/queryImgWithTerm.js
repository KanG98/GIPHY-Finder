export default async function queryImgWithTerm(keyWord, imgArr, setImgArr, apiKey){
    return await fetch(`https://api.giphy.com/v1/gifs/search?q=${String(keyWord)}&api_key=${String(apiKey)}`)
        .then(res => res.json())
        .then(res => {
            setImgArr(res["data"])
            console.log(res)
            
        })
}



