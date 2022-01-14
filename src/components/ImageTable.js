import React from "react"
import ImageCell from "./ImageCell"

export default function ImageTable(props){
    return(
        <div style={styles.container}>
            {props.imgArr === [] ? <p style={{color: "white"}}>empty</p> : 
                props.imgArr.map((data) => <><ImageCell key={data['id']} data={data}/></>)}
        </div>
    )
}

const styles = {
    container:{
        width: "600px",
        justifyContent: "center",
        backgroundColor: "red",
        margin: "0 auto"
    }

}