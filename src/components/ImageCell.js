import React from "react"

export default function ImageCell(props){
    return (
        <img src={props.data["images"]["downsized"]["url"]} 
             alt={props.id} 
             style={styles.cellStyle}/>
    )
}

const styles = {
    cellStyle: {
        maxWidth: "200px",
        minWidth: "200px"
    }
}