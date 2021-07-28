import React from "react";

function Info(props){
    console.log(props);
    return (<div>
    <p className="info">{props.info}</p>
    </div>)

}

export default Info;