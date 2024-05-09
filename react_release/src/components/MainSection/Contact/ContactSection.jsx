import { BsTelephone } from "react-icons/bs";
import Title from '../../../utils/Title'
import Mail from "./Mail";
import { IconContext } from 'react-icons';
import { ContactInfo } from "../../../utils/ContactInfo";
import { LayoutContext } from "../../../context/LayoutContext";
import { useContext } from "react";

export default function ContactSection() {

    const layout = useContext(LayoutContext);

    return(
        <section style={layout} id='contact'>
            <Title title={"CONTACT"}>
                <BsTelephone />
            </Title>
            <article style={{height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <IconContext.Provider value={{size: '1em', color: "#FBBE6C"}}>
                    {
                        ContactInfo.map((contact) => (
                            <div key={contact.id} style={{marginBottom: "1rem"}}>
                                {contact.icon}<span style={{marginLeft : "1em"}}>{contact.info}</span>
                            </div>                           
                        ))
                    }
                    <div>
                        <span style={{display: "flex", justifyContent: "center", fontSize: "2em", color: "#FBBE6C", fontFamily: "pacifico", marginBottom: "4rem"}}>
                            Ecrivez moi !
                        </span>
                        <Mail/>
                    </div>
                </IconContext.Provider>
            </article>
        </section>
    )
}