import { useState } from "react"
import { IconContext } from 'react-icons';

export default function IconBorder({children, url}) {
    const [hover, setHover] = useState(false);

    let style = {
        padding: "0.6em",
        borderWidth : "2.5px",
        borderStyle : "solid",
        borderColor : hover ? "#FFB04A" : "white",
        borderRadius: "50%",
        transition: hover ? "0.3s" : "none"

    }

    return(
        <div style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <a href={url} target="_blank" style={{textDecoration: "none", display: "flex"}}>
                <IconContext.Provider value={{size: '1.2em', color: hover ? "#FFB04A" : "white"}}>
                    {children}
                </IconContext.Provider>
            </a>
        </div> 
    )
}