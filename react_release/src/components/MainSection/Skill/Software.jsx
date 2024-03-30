import { useState } from "react"
import { FaComputer } from "react-icons/fa6";

export default function Software() {

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
        width: "fit-content",
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
            transform: 'scale(1.05)'
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
                <FaComputer style={iconStyle} size= {"2em"}/>                
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
                <h1 style={{fontSize: "20px", color: hover ? "#FBBE6C" : "#BAB7B7"}}>LOGICIELS</h1>
                    <div style={{display: "flex", flexDirection: "column", gap: "0.5em"}}>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Prototypage :</p>
                            <div style={{display: "flex", flexDirection: "row", gap: "1em"}}>
                                <img src="src\assets\Figma.png" alt = "Figma" width="15" height="auto"/>
                            </div>
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Modélisation 3D :</p>
                            <div style={{display: "flex", flexDirection: "row", gap: "1em"}}>
                                <img src="src\assets\Solidworks_icon.png" alt = "Solidworks" width="15" height="auto"/>
                                <img src="src\assets\Fusion360_icon.png" alt = "Fusion 360" width="15" height="auto"/>
                                <img src="src\assets\Comsol.png" alt = "Comsol" width="25" height="auto"/>
                            </div>
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Réseau :</p>
                            <img src="src\assets\Cisco.png" alt = "Cisco" width="30" height="auto"/>
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Réalité immersive :</p>
                            <img src="src\assets\Unity.png" alt = "Unity" width="40" height="auto"/>
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Suite Adobe :</p>
                            <img src="src\assets\Photoshop.png" alt = "Photoshop" width="25" height="auto"/>
                        </article>
                        <article style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>No code :</p>
                            <div style={{display: "flex", flexDirection: "row", gap: "1em"}}>
                                <img src="src\assets\Notion.png" alt = "Notion" width="25" height="auto"/>
                                <img src="src\assets\Airtable.png" alt = "Airtable" width="25" height="auto"/>
                            </div>
                        </article>
                    </div>
            </div>
        </section>
    )
}