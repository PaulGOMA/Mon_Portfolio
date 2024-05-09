import { useState } from "react"
import { RiExternalLinkLine } from "react-icons/ri";
import useMediaQuery from "../../hook/UseMediaQuery";

export default function EducationItem({year, info, establishment, schoolUrl}) {

    const isLargeScreen = useMediaQuery('(max-width: 806px)');
    const [hover, setHover] = useState(false);

    let style = {
        padding: "0px 0px 30px 50px",
        borderLeftColor : hover ? "#FBBE6C" : "#BAB7B7",
        borderLeftWidth : "0.1px",
        borderLeftStyle : "solid",
        position : "relative",
        transition: hover ? "0.3s ease" : "none",
        fontSize: isLargeScreen ? "12px" : "16px",
    }

    let circleStyle = {
        content: "",
        position: "absolute",
        top: "0px",
        left: "-6.5px",
        width: "0.75em",
        height: "0.75em",
        borderRadius: "50%",
        backgroundColor: hover ? "#FBBE6C" : "#BAB7B7",
        transition: hover ? "0.3s ease" : "none",
    }

    return(
        <section style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)} >
            <div style={circleStyle}/>
            <div style={{display: "flex", flexDirection: "column", gap: "1em", fontSize: "1.2em"}}>
                <time style={{fontSize: "1.2em", color: hover ? "#FBBE6C" : "#BAB7B7"}}>{year}</time>
                {info}
                <p style={{display: "flex", flexDirection: "row", gap: "1em", fontSize: "1.2em"}}>
                    {establishment}
                    <a href={schoolUrl} target="_blank">
                        <RiExternalLinkLine color={hover ? "#FBBE6C" : "#BAB7B7"}/>
                    </a>
                    
                </p>
            </div>
        </section>
    )
}