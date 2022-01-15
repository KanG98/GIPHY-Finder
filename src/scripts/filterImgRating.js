export default function filterImgRating(criteria, imgArr, setImgArr){
    // function call
    // filterImgRating(["","g",""], res["data"], setImgArr)

    const res = []
    imgArr.map((img) => {
        if(criteria[0] === "p" && img["rating"] === "p") res.push(img)
        if(criteria[1] === "g" && img["rating"] === "g") res.push(img)
        if(criteria[2] === "pg" && img["rating"] === "pg") res.push(img)
    })
    setImgArr(res)
}