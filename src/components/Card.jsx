import React from "react";
import contacts from "../contacts";
import Avator from "./Avator";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avator img={props.img} />
      </div>
      <div className="bottom">
        <Details tel={props.tel} email={props.email} />
      </div>
    </div>
  );
}

export default Card;
