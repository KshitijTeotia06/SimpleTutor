import React, {useEffect, useState} from 'react';
import './sideNavBar.css'

export default function SideNavBar(props) {

  const sideTitles = props.sideTitles;


  

  // var cont = (<p>test</p>)

  const [bodyText, setbodyText] = useState("");
  const [cont, setCont] = useState((<div></div>));
  // function print(heading, text){
  //   console.log(heading);
  //   title = heading;
  //   paragraph = text;
  //   // title = "OWOWO";
  // }

  function changeText(titl){
      setbodyText(titl.text);
      setCont(titl.cont)
      // console.log("TEST");
  }

  const newTitles = sideTitles.map((titl) => (
    <a onClick = {() => changeText(titl)} key = {titl.key} style = {{color: titl.isbold == "TRUE" && "#1CB68B", marginLeft: titl.tab == "TRUE" && "20px"}}>
      {/* {titl.tab ? ("\u00a0 \u00a0 \u00a0") : ("")} */}
      {titl.text}
      </a>
  ))

  
  return (
    <>
    <div className="sidenav" style = {{float: "left"}}>
        {/* <a href="#about">What is SEA?</a>
        <a href="#about"  style = {{color: "#1CB68B"}}>Guides</a>
        <a href="#about"> &emsp; Family</a>
        <a href="#about"> &emsp; Identify</a> */}

        {newTitles}
    </div>
    <div style = {{float: "left", marginLeft: "50px", marginTop: "-50px"}}>
      <h1>{bodyText}</h1>
      {cont}
    </div>
    </>
  )
}