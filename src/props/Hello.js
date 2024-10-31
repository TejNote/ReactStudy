import React from "react";

function Hello( {color, name, isSpecial} ) {
    return <div style={{color: color}}>{isSpecial && <b>*</b>}안녕하세요 {name}</div>
}

Hello.defaultProps = {
    color: 'blue',
    name: 'ReReact',
    isSpecial: false
}

export default Hello;
