export default function filterImgRating(criteria, imgArr, setImgArr, tempGar, setTempGar){

    const res = []  
    imgArr = imgArr.concat(tempGar)
    imgArr.map((img) => {
        if(criteria[0] === "p" && img["rating"] === "p") 
            res.push(img)
        if(criteria[1] === "g" && img["rating"] === "g") 
            res.push(img)
        if(criteria[2] === "pg" && img["rating"] === "pg") 
            res.push(img)

        setTempGar(imgArr.filter(img => !res.includes(img)))
    })
    setImgArr(res)
}