import queryRandomImg from "../scripts/queryRandomImg";

export default function MoreRandomBtn(props){
    return (
        <button onClick={() => queryRandomImg(props.imgArr, props.setImgArr, props.apiKey)}
                style={styles.getMoreBtn}>Get Another GIF !!</button>
    )
}

const styles = {
    getMoreBtn:{
        margin: "0 auto",
        display: "flex",
        marginTop: "50px",
        justifyContent: "center",
        padding: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
        cursor: "pointer"
    }
}

