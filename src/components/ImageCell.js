import React from "react"

export default function ImageCell(props){
    return (
        <img className="cell" 
            src={props.data["images"]["downsized"]["url"]} 
             alt={props.id} 
             style={props.alone ? styles.aloneCell : styles.cellStyle}/>
    )
}

const styles = {
    cellStyle: {
        maxWidth: "200px",
        minWidth: "200px"
    },
    aloneCell:{
        display: "flex",
        paddingTop: "50px",
        margin: "0 auto",
        width: "500px"
    }
}