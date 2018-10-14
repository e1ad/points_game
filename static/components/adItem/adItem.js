import React from 'react';

import "./adItem.scss";

const AdItem = (props)=>{
    let style = {
        backgroundImage: props.data && props.data.img ? `url(${props.data.img})`  : undefined
    }
    return <div style = {style} className={`comp ad-item ${props.data && props.data.bonus ? 'bonus' : ''}`}>
                <span>{props.name}</span>
            </div>
}

export default AdItem;