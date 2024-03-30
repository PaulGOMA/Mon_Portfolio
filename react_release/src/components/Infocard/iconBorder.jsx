import { useState } from "react"
import { IconContext } from 'react-icons';

export default function IconBorder({children, url}) {
    const [hover, setHover] = useState(false);

    let style = {
        padding: "10px",
        borderWidth : "2.5px",
        borderStyle : "solid",
        borderColor : "#BAB7B7",
        borderRadius: "50%",

    }

    if(hover){
        style = {
            ...style,
            borderColor : "#FFB04A",
            transition: "0.3s"
        }
    }

    return(
        <div style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <a href={url} target="_blank" style={{textDecoration: "none", display: "flex"}}>
                <IconContext.Provider value={{size: '1.2em', color: hover ? "#FFB04A" : "#BAB7B7"}}>
                    {children}
                </IconContext.Provider>
            </a>
        </div> 
    )
}