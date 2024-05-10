import { useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";


export default function CertificateItem({title, academy, link, imagePath, alt}) {

    const [hover, setHover] = useState(false);

    let style = {
        borderColor : "#838282",
        borderWidth : "1px",
        borderStyle : "solid",
        borderRadius: "1.5em",
        content: "",
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5em 1em",
        gap: "0.5em",
        background: "rgba(255, 255, 255, 0.211)",
        transition: hover ? "0.3s ease" : "none",
        transform: hover ? 'scale(1.025)' : "none",
        boxShadow: "0.5px 1px 1px 1px white",
        fontSize: "16px"
    }

    return (
        <article style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <article  style={{height: "100%", display: "flex", justifyContent: "start", flexDirection: "column", alignItems: "center", fontSize: "1em"}}>
                <h2 style={{fontSize: "1.05em", color: hover ? "#FBBE6C" : "white", textAlign: "center", fontFamily: "pacifico"}}>{title}</h2>
                <p style={{fontSize: "1.05em"}}>{academy}</p>
                <div style={{width: "fit-content", borderBottom: "2px solid white", padding: "8px 0px"}}>
                    <a 
                        href={link} 
                        style={{textDecoration: "none", color: "white", display: "flex", gap: "4px"}}
                        target="_blank"
                    ><p>Afficher la certification</p> <RiExternalLinkLine color="white"/></a>
                </div>                
            </article>            
            <div>
                <img src={imagePath} style={{borderRadius: "1em", width: "13em", height: "9em"}} alt={alt}/>
            </div>
        </article>
    )
}