import { useState } from "react"
import { IconContext } from 'react-icons';
import { RiCodeSSlashFill } from "react-icons/ri";
import { ImHtmlFive2 } from "react-icons/im";
import { TfiCss3 } from "react-icons/tfi";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import { SiDart } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";


export default function Programmation() {

    const [hover, setHover] = useState(false);

    const iconContainer = {
        position: 'absolute', 
        top: '-22px', 
        left: '-18px', 
        content: '', 
        backgroundColor: '#152131', //#152131
        width: '2.5em', 
        height: '2.5em',
        borderRadius: '50%'
    }

    let style = {
        padding: "20px 18px",
        width: "max-content",
        height: '15em',
        borderColor : "#BAB7B7",
        borderWidth : "3.5px",
        borderStyle : "solid",
        borderRadius: '15px',
        position : "relative",
    }

    let iconStyle = {
        position: "absolute",
        top: "6px",
        left: "2px",
        color: "#BAB7B7"
    }

    if(hover){
        style = {
            ...style,
            borderColor : "#FFB04A",
            transition: "0.3s ease",
            transform: "scale(1.05)"
        },

        iconStyle = {
            ...iconStyle,
            color: "#FBBE6C",
            transition: "0.3s ease"
        }
    }

    return(
        <section style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <div style={iconContainer}>
                <RiCodeSSlashFill style={iconStyle} size={"2em"}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
                <h1 style={{fontSize: "20px", color: hover ? "#FBBE6C" : "#BAB7B7"}}>PROGRAMMATION</h1>
                <IconContext.Provider value={{size: '1.25em', color: "#FBBE6C"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "0.5em"}}>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Web :</p>
                            <div style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                                <ImHtmlFive2 />
                                <TfiCss3 />
                                <IoLogoJavascript />
                                <GrReactjs />
                                <IoLogoNodejs />
                            </div>
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em"}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Mobile :</p>
                            <div style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                                <SiDart />
                                <SiFlutter />
                            </div>
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Data Analyst :</p>
                            <SiPython />
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Base de données :</p>
                            <div style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                                <TbBrandMysql />
                                <BiLogoMongodb />
                            </div>
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>IOT :</p>
                            <div style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                                <p style= {{fontSize: '1.2em', fontWeight: '400', lineHeight: '2em', color: "#FBBE6C"}}>C</p>
                                <TbBrandCpp />
                                <SiPython />
                            </div>
                        </article>
                    </div>
                </IconContext.Provider>
            </div>
        </section>
    )
}