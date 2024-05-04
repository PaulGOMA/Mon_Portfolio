import { useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";


export default function CertificateItem({title, academy, link, imagePath}) {

    const [hover, setHover] = useState(false);

    let style = {
        borderColor : "#BAB7B7",
        borderWidth : "1px",
        borderStyle : "solid",
        borderRadius: "1.5em",
        content: "",
        width: "205px",
        height: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5em",
        gap: "0.5em",
        background: "rgba(255, 255, 255, 0.211)",
        boxShadow: "1px 1px 5px black",
        
    }

    if(hover){
        style = {
            ...style,
            borderColor : "#FBBE6C",
            transition: "0.3s ease",
            transform: "scale(1.1)"
        }
    }

    return (
        <article style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <div>
                <img src={imagePath} width="200" height="142" style={{borderRadius: "1em"}}/>
            </div>            
            <h2 style={{fontSize: "18px", color: hover ? "#FBBE6C" : "#BAB7B7", textAlign: "center"}}>{title}</h2>
            <p style={{fontSize: "14px"}}>{academy}</p>
            <div style={{width: "fit-content", borderBottom: "2px solid #BAB7B7", padding: "8px 0px"}}>
                <a 
                    href={link} 
                    style={{textDecoration: "none", color: "#BAB7B7", display: "flex", gap: "4px"}}
                    target="_blank"
                ><p>Afficher la certification</p> <RiExternalLinkLine color="#BAB7B7"/></a>
            </div>
        </article>
    )
}