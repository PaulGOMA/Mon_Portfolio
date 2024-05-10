import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useMediaQuery from '../../hook/UseMediaQuery';

export default function Mail() {

    const isLargeScreen = useMediaQuery('(max-width: 806px)');
    const [hover, setHover] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lvq09pg', 'template_l6cb9cz', form.current, {
            publicKey: 'Pqo7_qXHLzRHoAuAk',
        }).then(
            () => {
                console.log('SUCCESS!');
            },(error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    const style = {
        backgroundColor: "transparent", 
        border: "3px solid #BAB7B7",
        borderRadius: "15px",
        padding: "0.7em",
        fontSize: "0.8em",
        color: "white"
    }

    const formStyle = {
        display: "grid", 
        rowGap: "2em", 
        columnGap: "2em", 
        gridTemplateRows: isLargeScreen ? "1fr 1fr 4fr 1fr" : "1fr 4fr 1fr",
        width: "100%", 
        height: "50vh"
    }

    const namePosition = {
        ...style,
        gridColumn: "1",
        gridRow: "1"
    }

    const mailPosition = {
        ...style,
        gridColumn: isLargeScreen ? "1" : "2",
        gridRow: isLargeScreen ? "2" : "1",
    }

    const messagePosition = {
        ...style,
        gridColumn: isLargeScreen ? "1" : "1/3",
        gridRow: isLargeScreen ? "3" : "2",
    }

    const buttonPosition = {
        ...style,
        gridColumn: isLargeScreen ? "1" : "1/3",
        gridRow: isLargeScreen ? "4" : "3",
        background: hover ? "transparent" : "#FBBE6C",
        borderColor : hover ? "#FBBE6C" :"transparent" ,
        color: hover ? "#FBBE6C" : "#1F1F1F",
        transition: hover ? "0.7s ease" : "none",
        cursor: "pointer",
        fontSize: "1em",
        fontFamily: "pacifico",
        fontWeight: "bold",
        letterSpacing: "0.5em"
    }
    
    return(
        <form ref={form} onSubmit={sendEmail} style={formStyle}>
            <input type="text" name="to_name" style={namePosition} placeholder='Nom'/>
            <input type="email" name="from_name" style={mailPosition} placeholder='Addresse mail'/>
            <textarea name="message" style={messagePosition} placeholder='Message'/>
            <input type="submit" value="Envoyer" style={buttonPosition} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}/>
        </form>
    )
}