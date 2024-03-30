import { useState } from "react"
import { FaUsersGear } from "react-icons/fa6";


export default function ProductLeadership() {

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
        size: "1.5em",
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
                <FaUsersGear style={iconStyle} size= {"2em"}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
                <h1 style={{fontSize: "20px", color: hover ? "#FBBE6C" : "#BAB7B7"}}>PRODUCT LEADERSHIP</h1>
                <div style={{display: "flex", flexDirection: "column", gap: "0.5em"}}>
                    <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Lean management</p>
                    <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Méthodes agiles</p>
                    <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Design to cost</p>
                    <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>UX/UI Design</p>
                    <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>Human Focused Design</p>
                </div>
            </div>
        </section>
    )
}