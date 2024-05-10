import  Link  from "./Link"
import useMediaQuery from "../../hook/UseMediaQuery"

function Tool({toolStyle, tools}) {

    return(
        <ul style={{display: "flex", flexDirection: "row", justifyContent: "start", alignSelf: "start", listStyle: "none", gap: "0.5em"}}>
            {tools.map(tool => (
                <li key={tool} style={toolStyle}>{tool}</li>
            ))}
        </ul>
    )
}


export default function ProjectItem({image, tools, title, content, typePath, path}) {

    const isLargeScreen = useMediaQuery('(max-width: 492px)');

    let style = {
        width: "100%",
        height: "100%",
        position: "relative",
        boxShadow: "1px 1px 3px black",
        borderRadius: "20px",
        display: "flex",
        fontSize: isLargeScreen ? "13px" : "16px",
    }

    let layer = {
        background: "linear-gradient(#24221E60, #15284EBD)",
        position: "absolute",
        borderRadius: "20px",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        boxSizing: "border-box",
        gap: "0.5em",
        fontSize: "1em",
    }

    let toolStyle = {
        width: "fit-content",
        height: "auto",
        padding: "0.5em 1em",
        backgroundColor: "#FFF",
        color: "#152131",
        borderRadius: "2.5em",
        
    }

    return(
        <article style={style}>
            <img src={image} style={{width: "100%", borderRadius: "20px"}}/>
            <div style={layer}>
                <h2 style={{color: "#FFF"}}>{title}</h2>
                <p style={{color: "#FFF", padding:"1em", fontSize: '0.8em'}}>{content}</p>
                <Link type={typePath} path={path}/>
                <Tool toolStyle={toolStyle} tools={tools}/>
            </div>
        </article>
    )
}