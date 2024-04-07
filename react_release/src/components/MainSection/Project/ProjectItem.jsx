import  Link  from "./Link"

function Tool({toolStyle, tool}) {

    return(
        <div style={toolStyle}>
            {tool}
        </div>
    )
}


export default function ProjectItem({image, tool, title, content, typePath, path}) {

    let style = {
        width: "100%",
        height: "auto",
        position: "relative"
    }

    let layer = {
        background: "linear-gradient(#2E2C2928, #FBBD6C6E)",
        position: "absolute",
        borderRadius: "20px",
        left: "0px",
        bottom: "0px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
        gap: "1em"
    }

    let toolStyle = {
        width: "fit-content",
        height: "auto",
        padding: "10px 15px",
        backgroundColor: "#FFF",
        color: "#152131",
        borderRadius: "2.5em",
        alignSelf: "start"
    }

    return(
        <article style={style}>
            <img src={image} style={{width: "100%", borderRadius: "20px"}}/>
            <div style={layer}>
                <h2 style={{color: "#FFF"}}>{title}</h2>
                <p style={{color: "#FFF"}}>{content}</p>
                <Link type={typePath} path={path}/>
                <Tool toolStyle={toolStyle} tool={tool}/>
            </div>
            
        </article>
    )
}