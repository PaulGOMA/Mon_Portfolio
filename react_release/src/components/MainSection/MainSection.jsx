import IntroduceSection from './Me/IntroduceSection'
import './MainSection.css'
import ProfileSection from './Me/ProfileSection'
import EducationSection from './Education/EducationSection'
import SkillSection from './Skill/SkillSection'
import CertificateSection from './Certificate/CertificateSection'
import ProjectSection from './Project/ProjectSection'
import ContactSection from './Contact/ContactSection'
import { LayoutContext } from '../../context/LayoutContext'


export default function MainSection() {

    const layout = {
        display: "flex", 
        flexDirection: "column", 
        width: "100%", 
        minHeight: "auto", 
        justifyContent: "start",
        margin: "2rem 0",
        gap: '2rem',
    };

    return (
        <main className="main-container">
            <LayoutContext.Provider value={layout}>
                <IntroduceSection/>
                <ProfileSection/>
                <EducationSection/>
                <SkillSection/>  
                <CertificateSection/>  
                <ProjectSection /> 
                <ContactSection/>                
            </LayoutContext.Provider>

        </main>
    )
}