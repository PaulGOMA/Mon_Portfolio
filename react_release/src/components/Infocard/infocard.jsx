import IconBorder from './iconBorder';
import MailButton from './MailButton';
import './infocard.css';
import { MdOutlineFacebook } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export default function Infocard() {
    return <aside className="Infocard-container">
        <h1 className='name'>Paul Valerie GOMA</h1>
        <h2 className='student'>Etudiant, France</h2>
        <div >
            <img src="src\assets\Profil_photo.jpg" alt = "Profile picture of Paul Valerie GOMA" width="250" height="auto" className='picture'/> 
        </div>
        <h3 className='portfolio'>mon portfolio</h3>
        <section className='icon-container'>
            <IconBorder url={"https://github.com/PaulGOMA"}>
                <FaGithub />
            </IconBorder>
            <IconBorder url={"https://www.facebook.com/paul.goma.50/"}>
                <MdOutlineFacebook/>
            </IconBorder>
            <IconBorder url={"https://www.instagram.com/paul_valerie_goma/"}>
                <PiInstagramLogoFill />
            </IconBorder>
            <IconBorder url={"https://www.linkedin.com/in/paul-valerie-goma-1a9a2a143/"}>
                <FaLinkedin />
            </IconBorder>
            <IconBorder url={"https://www.pinterest.fr/gomapaul/"}>
                <FaPinterest />
            </IconBorder>
        </section>
        <MailButton url={"mailto: paulgoma07@gmail.com"}>
            <GoMail />
        </MailButton>
        <p>Copyright 2024 Paul Valerie GOMA</p> 
    </aside>
}