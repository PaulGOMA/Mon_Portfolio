import { useState } from "react"
import { IconContext } from 'react-icons';

export default function MailButton({children, title}) {
    const [hover, setHover] = useState(false);

    let style = {
        width: "fit-content",
        padding: "5px 20px 5px 20px",
        borderRadius: "2.5em",
        borderColor : hover ? "#FBBE6C" : "#BAB7B7",
        borderWidth : "1px",
        borderStyle : "solid",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        gap: "1em",
        transition: hover ? "0.3s ease" : "none"
        
    }

    return(
        <div style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <IconContext.Provider value={{size: '1em', color: hover ? "#FBBE6C" : "#BAB7B7"}}>
                {children} 
                <p style={{fontSize: "1em", color: hover ? "#FBBE6C" : "#BAB7B7"}}>{title}</p>
            </IconContext.Provider>
        </div> 
    )
}