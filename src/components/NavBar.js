import React from "react"


function stickers(){

}


class Navbar extends React.Component {
  render(){
    return (
      <div>
      <nav className = "NavbarItems">





        <view>
        <button style ={styles.button1} onClick={() => window.location.reload(false)}> GIFHY </button>
        <button style ={styles.button1} onClick={stickers}> Stickers </button>
        <button style ={styles.button1} onClick={stickers}> PLACEHOLDER </button>
        <button style ={styles.button1} onClick={stickers} > PLACEHOLDER </button>



        </view>


        </nav>



        </div>


    )
  }

}

export default Navbar;

const styles = {
  button1: {
   marginRight:"10px",
   fontSize: "20px",
   backgroundColor: "black",
 color: "white",
 padding: "10px 60px",
 borderRadius: "5px",
 margin: "10px 0px",



 },




}
