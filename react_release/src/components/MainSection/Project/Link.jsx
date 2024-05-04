import { RiExternalLinkLine } from "react-icons/ri";
import { IoPlayOutline} from "react-icons/io5";
import { IconContext } from 'react-icons';
import { useState, useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

function VideoPlayer({path, isPlaying}) {
    
    const ref = useRef(null);

    useEffect(() => {
        if(isPlaying) {
            ref.current.pause;
        } else {
            ref.current.play;
        }
    })

    return <video ref={ref} src={path}/>
}

function ModalScreen({path, setVideo, setHover, hover, stylebutton}) {

    const modalScreenStyle = {
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.8)",
        zIndex: "1000"
    }

    const videoFrameStyle = {
        width: "fit-content",
        height: "auto",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1em",
        background: "#D8D8D8",
        borderRadius: "20px"
    }

    return (
        <section style={modalScreenStyle}>
            <IconContext.Provider value={{size: '2em', color: hover ? "#FFFFFF" : "#152131"}}>
                <div style={videoFrameStyle}>
                    <button onClick={() => setVideo(false)} style={stylebutton} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
                        <RxCross1 />
                    </button>
                    <video src={path} loop playsInline controls style={{borderRadius: "10px"}}/>
                </div>
            </IconContext.Provider>
        </section>
    );
}

export default function Link({type, path}) {

    const [hover, setHover] = useState(false);
    const [video, setVideo] = useState(false);


    let linkStyle = {
        backgroundColor: "#FFFFFF",
        width: "fit-content",
        height: "auto",
        borderRadius: "100%",
        padding: "0.5em",
        cursor: "pointer",
    }

    if(hover){
        linkStyle = {
            ...linkStyle,
            backgroundColor : "#152131",
            transition: "0.3s"
        }
    }

    return(
        <>
            <div style={linkStyle} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
                <IconContext.Provider value={{size: '1.5em', color: hover ? "#FFFFFF" : "#152131"}}>
                    {type == "link" ? <a href={path} target="_blank" style={{textDecoration: "none", display: "flex"}}>
                        <RiExternalLinkLine/>
                    </a> : <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() => setVideo(!video)}>
                        <IoPlayOutline/>
                    </div>}
                    
                </IconContext.Provider>
            </div>
            {video && <ModalScreen path={path} setVideo={setVideo} video={video} setHover={setHover} hover={hover} stylebutton={linkStyle}/>}
        </>
    )
}
