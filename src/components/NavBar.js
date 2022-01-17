import React from "react"
import queryRandomImg from "../scripts/queryRandomImg";
import icon from "./../image/GIPHY_Images.png"

function stickers(){

}


class Navbar extends React.Component {
  render(){
    return (
      <header>

       <div style = {{display: 'flex', justifyContent: 'center'}}>
      <nav className = "NavbarItems">





        <view>
<img src = {icon} />
        <button style ={styles.button1} onClick={(stickers) => window.location.reload(false)} > HOME</button>
        <button style ={styles.button1} onClick={() => {this.props.setKeyword("memes")}}> MEMES </button>
        <button style ={styles.button1} onClick={() => window.location.reload(false)}> TRENDING </button>
        <button style ={styles.button1} 
            onClick={() => {queryRandomImg(this.props.imgArr, this.props.setImgArr, this.props.apiKey)}} > RANDOM </button>

        </view>
        </nav>
         </div>
</header>

    )
  }

}

export default Navbar;

const styles =  {
  button1: {
   fontSize: "15px",
   backgroundColor: "black",
   color: "white",
   position: 'relative',
   padding: "10px 60px",
   margin:"20px",
   borderRadius: 100,


}
}
