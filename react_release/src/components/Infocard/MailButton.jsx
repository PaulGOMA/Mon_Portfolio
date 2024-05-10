import { useState } from "react"
import { IconContext } from 'react-icons';
import useMediaQuery from "../hook/UseMediaQuery";

export default function MailButton({children, url}) {

    const isLargeScreen = useMediaQuery('(max-width: 806px)');
    const [hover, setHover] = useState(false);

    let style = {
        width: "80%",
        padding: "10px 20px",
        borderRadius: "2.5em",
        background: hover ? "transparent" : "#FBBE6C",
        borderWidth : "2.5px",
        borderStyle : "solid",
        borderColor : hover ? "#FBBE6C" : "transparent",
        transition: hover ? "0.7s ease" : "none",
        fontSize: isLargeScreen ? "12px" : "16px",
    }

    let aStyle = {
        textDecoration: "none", 
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        color : hover ? "#FBBE6C" : "#1F1F1F",
        fontSize: "20px"
    }

    return(
        <div style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <a href={url} target="_blank" style={aStyle}>
                <IconContext.Provider value={{size: '1.5em', color: hover ? "#FBBE6C" : "#1F1F1F"}}>
                    {children} 
                    <span>Contactez moi !</span>
                </IconContext.Provider>
            </a>
        </div> 
    )
}