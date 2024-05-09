import { useState } from "react"
import { IconContext } from 'react-icons';
import useMediaQuery from "../../hook/UseMediaQuery";

export default function SkillItem({children, title, SkillList, hasListIcon}){

    const isLargeScreen = useMediaQuery('(max-width: 806px)');
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
        height: 'fit-content',
        borderColor : hover ? "#FFB04A" : "#BAB7B7",
        borderWidth : "1.5px",
        borderStyle : "solid",
        borderRadius: '15px',
        position : "relative",
        transition: hover ? "0.3s ease" : "none",
        transform: hover ? 'scale(1.05)' : "none"
    }

    let iconStyle = {
        position: "absolute",
        top: "6px",
        left: "2px",
        size: "2em",
        color: hover ? "#FFB04A" : "#BAB7B7",
        transition: hover ? "0.3s ease" : "none",
    }

    return(
        <section style={style} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <div style={iconContainer}>
                <IconContext.Provider value={iconStyle}>
                    {children }
                </IconContext.Provider>
            </div>

            <div style={{display: "flex", flexDirection: "column", gap: "1em", fontSize: isLargeScreen ? "12px" : "16px"}}>
                <h1 style={{fontSize: "20px", color: hover ? "#FBBE6C" : "#BAB7B7"}}>{title}</h1>
                <div style={{display: "flex", flexDirection: "column", gap: "0.5em"}}>
                    {hasListIcon ? SkillList.map((skill) => (
                        <article key={skill.title} style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                            <p style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>{skill.title}</p>
                            <div style={{display: "flex", flexDirection: "row", gap: "1em", justifyContent: 'start', alignItems: 'center'}}>
                                {skill.icon.map((icon) => (
                                    <IconContext.Provider key={icon.index} value={{size: '1.5em', color: "#FBBE6C"}}>
                                        {icon}
                                    </IconContext.Provider>
                                ))}
                            </div>
                        </article>
                    )) : SkillList.map((skill) => (
                        <p key={skill.id} style= {{fontSize: '1em', fontWeight: 'bold', lineHeight: '1.5em'}}>{skill.skill}</p>
                    )) }
                </div>
            </div>
        </section>
    )
}