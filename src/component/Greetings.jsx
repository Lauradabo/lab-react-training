import React from "react";

const Greetings = (props) => {
    if (props.lang === "de") {
        return <div class="langue">Hallo {props.children}</div>;
    } else if (props.lang === "en") {
        return<div class="langue">Hello {props.children}</div>;
    } else if (props.lang === "es") {
        return<div class="langue">Holà {props.children}</div>;
    } else {
        return <div class="langue">Bonjour {props.children}</div>;
    }
};

export default Greetings;