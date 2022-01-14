import React from "react"

function stickers(){

}


class Navbar extends React.Component {
  render(){
    return (
      <header>

       <div style = {{display: 'flex', justifyContent: 'center'}}>
      <nav className = "NavbarItems">





        <view>

        <button style ={styles.button1} onClick={() => window.location.reload(false)} > <img src = {"src/image/GIPHY_Images.png"} /> HOME PAGE</button>
        <button style ={styles.button1} onClick={stickers}> MEMES </button>
         <button style ={styles.button1} onClick={stickers}> TRENDING </button>
        <button style ={styles.button1} onClick={stickers} > RANDOM </button>

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
   fontSize: "20px",
   backgroundColor: "black",
   color: "white",
   position: 'relative',
   padding: "10px 60px",
   margin:"10px",

}
}
