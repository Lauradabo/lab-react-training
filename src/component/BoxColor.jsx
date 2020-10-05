import React from "react";

const BoxColor = (props) => {

return <div style={{background:`rgb(${props.r},${props.g},${props.b})`, height : "100px", width: "900px", color:"white", border:"solid black 1px", display:"flex", margin:"10px"}}>
<p style={{margin:"0 auto", display : "flex", alignSelf: "center"}}>
    rgb({props.r}, {props.g}, {props.b})
</p>
</div>
};

export default BoxColor;