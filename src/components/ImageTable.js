import React from "react"
import ImageCell from "./ImageCell"
import "./../App.css"

export default function ImageTable(props){
    return(
        <div style={styles.container}>
            {props.imgArr === [] ? <p style={{color: "white"}}>empty</p> : 
            <div className="row">
                    <div className="column">
                        {props.imgArr.slice(0, props.imgArr.length/3).map((data) => <ImageCell key={data['id']} className="gif" data={data}/>)}
                    </div>
                    <div className="column">
                        {props.imgArr.slice(props.imgArr.length/3, props.imgArr.length*2/3).map((data) => <ImageCell key={data['id']} className="gif" data={data}/>)} 
                    </div>
                    <div className="column">
                        {props.imgArr.slice(props.imgArr.length * 2/3).map((data) => <ImageCell key={data['id']} className="gif" data={data}/>)} 
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