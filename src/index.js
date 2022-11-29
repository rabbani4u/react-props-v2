import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <img
      src={props.img}
      />
      <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>
  )
}

ReactDOM.render(
  
  <div>
    <h1>My Contacts</h1>
    <Card 
    name="Beyonce"
    img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    alt="avatar_img"
    tel = "+123 456 789"
    email = "b@beyonce.com"
    />
    <Card />
  </div>,
  document.getElementById("root")
);
