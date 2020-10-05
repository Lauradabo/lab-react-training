import React from "react";

const CreditCard = (props) => {
    if (props.type = "Visa") {
        <img src=/>
    }
return (

    <div className="Card">
      <img src={props.picture} alt=""/>
      First name: {props.firstName}
      Last name: {props.lastName}
      Gender: {props.gender}
      Height: {props.height}
      Birth: {props.birth}
    </div>
  );
};



export default CreditCard;