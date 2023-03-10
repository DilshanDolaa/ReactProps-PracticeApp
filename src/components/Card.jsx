import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 classname="name"> {props.name}</h2>
          <img className="circle-img" src={props.image} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.email}</p>
          <p className="info">{props.tel}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
