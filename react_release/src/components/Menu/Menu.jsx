import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { NavIcons } from "../../utils/Icons";
import { IconContext } from "react-icons";
import useMediaQuery from "../hook/UseMediaQuery";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

function ModalMenu({TabIcon, setModalMenu, ScrollToSection}) {

    const modalScreenStyle = {
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        background: "rgba(35, 35, 35, 0.8)",
        zIndex: "1000"
    }

    const menuStyle = {
        background: "black",
        listStyle: "none",
        height: "100%",
        width: "fit-content",
        padding: "2rem 15rem 0 2rem"
    }

    return(
        <nav style={modalScreenStyle}>
            <ul style={menuStyle}>
                <button style={{border: "none", background: "none", paddingBottom: "5rem", cursor: "pointer"}} onClick={() => setModalMenu(false)}>
                    <IconContext.Provider value={{size: '2em', color: "white"}}>
                        <GrClose />
                    </IconContext.Provider>
                </button>
                {
                    TabIcon.map((icon) => (
                        <li key={icon.id} style={{height: "5rem"}}>
                            <Link to='/' 
                                style={{textDecoration: "none", color: "#BAB7B7", fontSize: "1.2rem"}}
                                onClick={() => ScrollToSection(icon.id)}>
                                {icon.id}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
    
}

export default function Menu() {

    const [activeLink, setActiveLink] = useState("introduce");
    const [modalMenu, setModalMenu] = useState(false)
    const isLargeScreen = useMediaQuery('(min-width: 1300px)')

    //Function to smoothly scroll to a section by its ID
    const ScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if(element){
            const marginTop = 20;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top: scrollToY, behavior: "smooth"});
            setModalMenu(false)
        }
    }

    //Function to determine the active section while scrolling
    const ActiveSection = () => {
        for (let i = NavIcons.length - 1; i >= 0; i--) {
            const section = document.getElementById(NavIcons[i].id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    //Set the active link based on the section ID
                    setActiveLink(NavIcons[i].id);
                    break;
                }
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            //Call the function to determine the active section while scrolling
            ActiveSection();
        };
        window.addEventListener("scroll", handleScroll);
        //Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    let style = {
        position: "fixed",
        top: "25vh",
        right: "2vw",
        border: "solid 1px #838282",
        borderRadius: "2.5em",
        padding: "1rem",
        width:"fit-content",
        height: "50vh",
        boxShadow: "0.5px 1px 1px 1px white",
        background: "#ffffff36",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        transition: "padding .3s ease-in-out",
    }

    let iconStyle = {
        border: "2px solid #FBBE6C",
        borderRadius: "50%",
        listStyle: "none",
        padding: "10px",
    }

    const menuButtonStyle = {
        boxShadow: "0.5px 1px 1px 1px white",
        background: "#ffffff36",
        border: "solid 1px #838282",
        borderRadius: "2.5em",
        padding: "0.8rem",
        display: modalMenu ? "none" : "flex",
        justifyContent: "center",
        position: "fixed",
        top: "5vh",
        right: "5vw",
        zIndex: "1000"
    }


    return (
        <>
            {
                isLargeScreen ? (
                    <nav style={style}> 
                        <ul style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between", height: "100%"}}>
                        {
                            NavIcons.map((icon) => (
                                <li key={icon.id} 
                                    style={activeLink === icon.id ? iconStyle : {listStyle: "none"}}
                                    onClick={() => ScrollToSection(icon.id)}
                                    >
                                    <Link to='/'>
                                        <IconContext.Provider value={{size: '1.5em', color: activeLink === icon.id ? "#FBBE6C" : "white"}}>
                                            {icon.icon}
                                        </IconContext.Provider>
                                    </Link>
                                </li>
                            ))
                        }
                        </ul>
                    </nav>
                ) : (
                    <>
                        <button style = {menuButtonStyle} onClick={() => setModalMenu(true)}>
                            <IconContext.Provider value={{size: '2.5em', color: "white"}}>
                                <SlMenu />
                            </IconContext.Provider>
                        </button>  
                        {modalMenu && <ModalMenu TabIcon={NavIcons} setModalMenu={setModalMenu} ScrollToSection={ScrollToSection}/>}
                    </>
                    
                )
            }
        </>
        
    )
}
