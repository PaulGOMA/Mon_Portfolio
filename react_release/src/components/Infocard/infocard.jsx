import IconBorder from './iconBorder';
import MailButton from './MailButton';
import './infocard.css';
import { GoMail } from "react-icons/go";
import { InfocardIcons } from '../../utils/Icons';

export default function Infocard() {
    
    return <aside className="Infocard-container">
        <h1 className='name'>Paul Valerie GOMA</h1>
        <h2 className='student'>Etudiant, France</h2>
        <div >
            <img src="C:\Users\paulg\Documents\Web_Project\Mon_Portfolio\react_release\dist\Profil_photo.jpg" alt = "Profile picture of Paul Valerie GOMA" width="250" height="auto" className='picture'/> 
        </div>
        <h3 className='portfolio'>mon portfolio</h3>
        <section className='icon-container'>
            {
                InfocardIcons.map((icon) => (
                    <IconBorder key = {icon.url} url={icon.url}>{icon.icon}</IconBorder>
                ))
            }
        </section>
        <MailButton url={"mailto: paulgoma07@gmail.com"}>
            <GoMail />
        </MailButton>
        <p>Copyright 2024 Paul Valerie GOMA</p> 
    </aside>
}