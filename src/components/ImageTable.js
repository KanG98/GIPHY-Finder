import React from "react"
import ImageCell from "./ImageCell"
import "./../App.css"




export default function ImageTable(props){
    return(
        <div style={styles.container} >
            {props.imgArr === [] ? <p style={{color: "white"}}>empty</p> : 
            <div className="row">
                    <div className="column">
                        {props.imgArr.map((data) => <ImageCell key={data['id']} className="gif" data={data}/>)}
                    </div>
            </div>
            }
        </div>
    )
}

const styles = {
    container:{
        boxSizing: "border-box",
        width: "620px",
        margin: "0 auto",
        marginTop: "20px"
    }
}