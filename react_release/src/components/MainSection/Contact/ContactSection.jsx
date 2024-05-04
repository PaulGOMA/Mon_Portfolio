import { BsTelephone } from "react-icons/bs";
import Title from '../../../utils/Title'
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import Mail from "./Mail";
import { IconContext } from 'react-icons';


export default function ContactSection() {
    return(
        <section style={{display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh", justifyContent: "start"}} id='contact'>
            <Title title={"CONTACT"}>
                <BsTelephone />
            </Title>
            <article style={{height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <IconContext.Provider value={{size: '1em', color: "#FBBE6C"}}>
                    <div style={{marginBottom: "2rem"}}>
                        <FaLocationDot /><span style={{marginLeft : "1em"}}>43 rue des quatre moulins, Carrières sous Poissy, France</span>
                    </div>
                    <div style={{marginBottom: "2rem"}}>
                        <BsTelephoneFill /><span style={{marginLeft : "1em"}}>+33 7 44 87 25 15</span>
                    </div>
                    <div>
                        <span style={{display: "flex", justifyContent: "center", fontSize: "2em", color: "#FBBE6C", fontFamily: "pacifico"}}>
                            Ecrivez moi !
                        </span>
                        <Mail/>
                    </div>
                </IconContext.Provider>
            </article>
        </section>
    )
}