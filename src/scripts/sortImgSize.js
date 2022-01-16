// maybe not to embedded the function

export default function sortImgSize(imgArr, setImgArr){
    setImgArr(imgArr.sort(compare))
}


function compare(a, b){
    let aSize = Number(a["images"]["downsized"]["size"])
    let bSize = Number(b["images"]["downsized"]["size"])
    if(aSize < bSize){
        return -1;
    }
    if(aSize > bSize){
        return 1
    }
    return 0
}