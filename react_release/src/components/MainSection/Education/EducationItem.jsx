import { useState } from "react"
import { RiExternalLinkLine } from "react-icons/ri";

export default function EducationItem({year, children, establishment, schoolUrl}) {

    const [hover, setHover] = useState(false);

    let style = {
        padding: "0px 0px 30px 50px",
        borderLeftColor : "#BAB7B7",
        borderLeftWidth : "0.1px",
        borderLeftStyle : "solid",
        position : "relative"
    }

    let circleStyle = {
        content: "",
        position: "absolute",
        top: "0px",
        left: "-6.5px",
        width: "0.75em",
        height: "0.75em",
        borderRadius: "50%",
        backgroundColor: "#BAB7B7"
    }

    if(hover){
        style = {
            ...style,
            borderLeftColor : "#FFB04A",
            transition: "0.3s ease"
        },

        circleStyle = {
            ...circleStyle,
            backgroundColor: "#FBBE6C",
            transition: "0.3s ease"
        }
    }

    return(
        <section style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <div style={circleStyle}/>
            <div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
                <time style={{fontSize: "16px", color: hover ? "#FBBE6C" : "#BAB7B7"}}>{year}</time>
                {children}
                <p style={{display: "flex", flexDirection: "row", gap: "1em"}}>
                    {establishment}
                    <a href={schoolUrl} target="_blank">
                        <RiExternalLinkLine color={hover ? "#FBBE6C" : "#BAB7B7"}/>
                    </a>
                    
                </p>
            </div>
        </section>
    )
}