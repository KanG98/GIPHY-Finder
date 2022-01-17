import React from "react"
import ImageCell from "./ImageCell"
import "./../App.css"

export default function ImageTable(props){
    return(
        <div style={styles.container} >
            {props.imgArr === [] ? <p style={{color: "white"}}>empty</p> :
            <div className="row">
                    <div className="column">
                        {props.imgArr.map((data) => <ImageCell key={data['id'] + Math.floor(Math.random() * (999999999 - 0 + 1)) + 0} className="gif" data={data}/>)}
                        {/* random to avoid id confliction, better solution is to filter out the repeated images when fetching from api */}
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
